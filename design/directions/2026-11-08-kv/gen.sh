#!/bin/zsh
# Generates one key-visual image with Codex's image tool (the person's ChatGPT sign-in) and copies it to art/<name>.png.
name=$1; prompt=$2
out=$PWD/art/$name.png
codex exec --skip-git-repo-check -s workspace-write -C $PWD/art "Use your image generation tool once to make this image, landscape 16:9, as large as the tool allows. Then copy the generated file to $out and print the path. Image: $prompt" < /dev/null > art/$name.log 2>&1
ls -la $out
