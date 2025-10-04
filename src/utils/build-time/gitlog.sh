#!/usr/bin/env sh

GENERATOR_SCRIPT=$1
POSTS_PATH=$2
OUTPUT_PATH=$3

echo 'Generate full log'
python "$GENERATOR_SCRIPT" "$OUTPUT_PATH/gitlog.json"

echo 'Generate logs for posts'
for POST in "$POSTS_PATH"/*
do
    POST_BASENAME=$(basename "$POST" ".md")
    echo "  generating $POST_BASENAME"
    python "$GENERATOR_SCRIPT" --file="$POST" "$OUTPUT_PATH/posts/$POST_BASENAME.json"
done
