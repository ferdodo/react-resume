#!/bin/bash
rm -rf /var/www/html/*
cp -r www/* /var/www/html
firefox http://localhost >/dev/null &>/dev/null &