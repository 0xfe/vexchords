#!/bin/sh

# This bucket is in the sweartax project
BUCKET=gs://vexflow.com
URL=${BUCKET}/vexchords

echo Building...
npm run build

echo Uploading Sweartax...
gsutil -h "Cache-control:public,max-age=300" -m cp -a public-read -z js,map,css,html dist/* ${URL}
gsutil -h "Cache-control:public,max-age=300" -m cp -a public-read -z html dist/demo.html ${URL}/index.html
