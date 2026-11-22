
import os
import re
import json
from pathlib import Path
from collections import defaultdict
from dotenv import load_dotenv
import cloudinary
from cloudinary import Search

# Load private credentials from .env
load_dotenv()

cloud_name = os.getenv("CLOUDINARY_CLOUD_NAME")
api_key = os.getenv("CLOUDINARY_API_KEY")
api_secret = os.getenv("CLOUDINARY_API_SECRET")

if not all([cloud_name, api_key, api_secret]):
    raise SystemExit("Missing Cloudinary credentials in .env")

cloudinary.config(
    cloud_name=cloud_name,
    api_key=api_key,
    api_secret=api_secret
)

# Main Cloudinary folder containing all couples
ROOT_FOLDER = "bharati-film-creation"


def create_slug(folder_name):
    """Convert a couple folder name into a clean JSON filename."""

    # Remove numbering such as 1. or 02_
    name = re.sub(r"^\d+[\s._-]*", "", folder_name)

    # Convert & into 'and'
    name = name.replace("&", " and ")

    # Create a URL-friendly slug
    slug = re.sub(r"[^a-zA-Z0-9]+", "-", name)
    return slug.strip("-").lower()


# Search all images inside the main folder and its subfolders
expression = (
    f"asset_folder:{ROOT_FOLDER}/* "
    "AND resource_type:image"
)

assets_by_couple = defaultdict(list)

try:
    result = (
        Search()
        .expression(expression)
        .max_results(500)
        .execute()
    )

    total_assets = 0

    while True:

        for asset in result.get("resources", []):

            asset_folder = asset.get("asset_folder", "")

            # Get the folder path relative to the main folder
            relative_path = asset_folder.removeprefix(
                ROOT_FOLDER
            ).strip("/")

            folder_parts = relative_path.split("/")

            # First folder identifies the couple
            if not folder_parts or not folder_parts[0]:
                continue

            couple_folder = folder_parts[0]

            # Second folder identifies the event.
            # If there is no event folder, use All.
            category = (
                folder_parts[1]
                if len(folder_parts) > 1
                else "All"
            )

            slug = create_slug(couple_folder)

            assets_by_couple[slug].append({
                "publicId": asset.get("public_id"),
                "url": asset.get("secure_url"),
                "category": category,
                "format": asset.get("format"),
                "width": asset.get("width"),
                "height": asset.get("height"),
                "bytes": asset.get("bytes")
            })

            total_assets += 1

        # Continue fetching if more results are available
        cursor = result.get("next_cursor")

        if not cursor:
            break

        result = (
            Search()
            .expression(expression)
            .max_results(500)
            .next_cursor(cursor)
            .execute()
        )

    # Generate one JSON manifest for each couple
    output_directory = Path("public/albums")
    output_directory.mkdir(parents=True, exist_ok=True)

    print("\n========== CLOUDINARY SYNC ==========")

    for slug, assets in sorted(assets_by_couple.items()):

        # Keep gallery order consistent
        assets.sort(
            key=lambda item: (
                item["category"].lower(),
                item["publicId"] or ""
            )
        )

        output = output_directory / f"{slug}.json"

        output.write_text(
            json.dumps(
                assets,
                indent=2,
                ensure_ascii=False
            ),
            encoding="utf-8"
        )

        categories = sorted({
            item["category"]
            for item in assets
        })

        print(f"\nCouple: {slug}")
        print(f"Photographs: {len(assets)}")
        print(f"Categories: {', '.join(categories)}")
        print(f"Manifest: {output}")

    print("\n=====================================")
    print(f"Total couples found: {len(assets_by_couple)}")
    print(f"Total photographs found: {total_assets}")
    print("Cloudinary sync completed successfully!")
    print("=====================================\n")

except Exception as error:
    raise SystemExit(f"Cloudinary sync failed: {error}")
