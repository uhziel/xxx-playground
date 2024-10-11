## image=tac/centos-compile-cppcheck:latest
# 更完整的 https://github.com/uhziel/docker-cppcheck/blob/main/Dockerfile.centos8

FROM centos:8

RUN set -eux; \
        yum -y update; \
        yum -y groupinstall "Development Tools"; \
        yum -y install cmake \
               pcre-devel \
        ; \
        yum clean all;

RUN set -eux; \
        git clone --single-branch --branch 1.90-h3d1 https://gitlab.h3d.com.cn/devops/code-analysis/cppcheck.git --depth 1; \
        cd cppcheck && mkdir buildrelease && cd buildrelease; \
        cmake -DCMAKE_BUILD_TYPE=Release -DBUILD_TESTS=ON -DHAVE_RULES=ON ..; \
        make -j8; \
        make test; \
        make install;
