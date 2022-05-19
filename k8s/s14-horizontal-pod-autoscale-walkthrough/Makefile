# Image URL to use all building/pushing image targets
IMG ?= uhziel/s14-horizontal-pod-autoscale-walkthrough

docker: docker-build docker-push

docker-build:
	docker build -t ${IMG} .

docker-push:
	docker push ${IMG}
