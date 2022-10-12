resource "tencentcloud_vpc" "test" {
    name         = "foo2"
    cidr_block   = "172.17.0.0/16"

    tags = {
        "owner" = "zhulei"
    }
}
