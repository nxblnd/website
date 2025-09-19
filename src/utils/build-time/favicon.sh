#!/usr/bin/env sh

cd "$1" || exit
mkdir -p favicon

size_list="16 32 48 64 180 192"

for size in ${size_list}
do
    rsvg-convert --width="$size" --height="$size" --keep-aspect-ratio favicon.svg > "favicon/$size.png"
done

echo 'PNG icons before compression' "$(du -b favicon/)"

pngcrush -ow favicon/*.png

echo 'PNG icons after compression' "$(du -b favicon/)"

cp favicon/180.png ./apple-touch-icon.png

magick favicon/16.png favicon/32.png favicon/48.png favicon/64.png -colors 256 favicon.ico
