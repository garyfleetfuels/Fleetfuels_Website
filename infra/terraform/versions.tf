terraform {
  required_version = ">= 1.6.0"

  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 4.0"
    }
  }

  # Azure storage backend recommended for production state locking:
  # backend "azurerm" {
  #   resource_group_name  = "rg-fleetfuels-tfstate"
  #   storage_account_name = "stfleetfuelstfstate"
  #   container_name       = "tfstate"
  #   key                  = "production.fleetfuels.swa.tfstate"
  # }
}

provider "azurerm" {
  features {}
}
