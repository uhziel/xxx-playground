# $ docker build -t uhziel/job-wq-1 .
# $ docker push uhziel/job-wq-1

# Specify BROKER_URL and QUEUE when running
FROM ubuntu:20.04

RUN apt-get update && \
    apt-get install -y curl ca-certificates amqp-tools python \
       --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*
COPY ./worker.py /worker.py

CMD  /usr/bin/amqp-consume --url=$BROKER_URL -q $QUEUE -c 1 /worker.py
