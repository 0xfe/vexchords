#!/bin/sh

BUCKET=gs://vexflow.com
URL=${BUCKET}/vexchords

echo Building VexChords...
npm run build

echo Uploading VexChords...
gsutil -h "Cache-control:public,max-age=600" -m cp -a public-read -z js,map,css,html dist/* ${URL}
gsutil -h "Cache-control:public,max-age=600" -m cp -a public-read -z html dist/demo.html ${URL}/index.html
