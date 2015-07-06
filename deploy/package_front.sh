#!/bin/bash

cd ../front
grunt package

cd ../deploy

mv ../front/pkg/xuexh5-website.zip ./


# unzip ../front/pkg/xuexh5-website.zip -d ./dist

# ./qrsync conf.json 

# rm -rf ./dist
# rm -rf ../front/pkg
