#!/bin/bash

cd .. & grunt package
unzip ../pkg/xuexh5-website.zip -d ./dist

./qrsync conf.json 

rm -rf ./dist
rm -rf ../pkg
