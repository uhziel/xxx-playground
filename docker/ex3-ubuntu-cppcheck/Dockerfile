# 和 ex2-debian-cppcheck 基本没差别， 只在替换源上有差别
FROM buildpack-deps:20.04 as build

RUN set -eux; \
  sed -i~ 's/http:\/\/\w*\.ubuntu\.com/http:\/\/mirrors.tuna.tsinghua.edu.cn/' /etc/apt/sources.list; \
  apt-get update; \
  apt-get install -y --no-install-recommends \
    cmake \
  ; \
  rm -rf /var/lib/apt/lists/*;

RUN set -eux; \
  git clone --single-branch --branch 1.90-h3d1 https://github.com/uhziel/cppcheck.git --depth 1; \
  cd cppcheck && mkdir buildrelease && cd buildrelease; \
  cmake -DCMAKE_BUILD_TYPE=Release -DBUILD_TESTS=ON -DHAVE_RULES=ON ..; \
  make -j4; \
  make test; \
  make install;

FROM ubuntu:20.04

LABEL description="生成cppcheck镜像。"
LABEL project="https://github.com/uhziel/docker-cppcheck"

ENV LANG="C.UTF-8"
ENV TZ="Asia/Shanghai"

COPY --from=build /usr/local/bin/cppcheck /usr/local/bin/cppcheck
COPY --from=build /usr/local/share/Cppcheck /usr/local/share/Cppcheck
