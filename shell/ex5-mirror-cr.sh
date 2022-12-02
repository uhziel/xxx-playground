#/usr/bin/env bash

set -euxo pipefail

images='
framw-clean-up:0.1.0
redis:3.2.12
framw-pull-artifacts:0.4.0
nfs-ganesha:3.4
samba
filebeat:7.17.7
'

from="registry.h3d.com.cn"
to="h3dcr.tencentcloudcr.com"

for image in $(echo "${images}"); do
  from_image="${from}/tac/${image}"
  to_image="${to}/tac/${image}"

  docker pull ${from_image}
  docker tag ${from_image} ${to_image}
  docker push ${to_image}
done

# remote exec
# ❯ cat ex5-mirror-cr.sh | ssh tt2node103 bash -
