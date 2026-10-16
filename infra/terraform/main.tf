# Resource Group for Fleet Fuels SWA
resource "azurerm_resource_group" "rg" {
  name     = var.resource_group_name
  location = var.location
  tags     = var.tags
}

# Azure Verified Module (AVM) for Azure Static Web Apps
# Official module: Azure/avm-res-web-staticsite/azurerm
module "avm_res_web_staticsite" {
  source  = "Azure/avm-res-web-staticsite/azurerm"
  version = "~> 0.6.0"

  name                = var.static_web_app_name
  resource_group_name = azurerm_resource_group.rg.name
  location            = var.swa_location
  sku_tier            = var.sku_tier
  sku_size            = var.sku_size

  enable_telemetry = true

  app_settings = {
    "NODE_VERSION" = "26"
  }

  tags = var.tags
}
