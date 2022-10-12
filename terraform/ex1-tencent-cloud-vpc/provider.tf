terraform {
  required_providers {
    tencentcloud = {
      source = "tencentcloudstack/tencentcloud"
      version = ">=1.78.3"
    }
  }
}

provider "tencentcloud" {
  region = "ap-guangzhou"
  secret_id = "AKID9tX0P7lEZt69zjJo6BCkj8nRilY4LOBj"
  secret_key = "VnulLF4i9XotsrhP1a4mUgnjPzRhojQx"
}
