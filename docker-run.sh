#!/bin/bash
docker build -f build-env/Dockerfile . -t react-resume-build
docker run react-resume-build | tee build.tar | tar t
docker build -f prod-env/Dockerfile . -t react-resume-prod
docker run react-resume-prod