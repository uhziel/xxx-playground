如果先删除 pvc，因为 job 还存在，会导致 pvc 因为`Finalizers:    [kubernetes.io/pvc-protection]` 而删除不掉。虽然实际 Job 的 Pod 已经完成，不再需要 pvc 提供存储。
