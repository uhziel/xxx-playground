kubectl create deployment redis-imperative-cli --image=redis
kubectl expose deployment redis-imperative-cli --type=NodePort --port=6379