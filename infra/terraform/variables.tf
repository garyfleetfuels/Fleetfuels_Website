variable "environment" {
  description = "The target environment name (e.g., prod, staging)."
  type        = string
  default     = "prod"
}

variable "location" {
  description = "The Azure region for the resource group (e.g., uksouth, westeurope)."
  type        = string
  default     = "uksouth"
}

variable "swa_location" {
  description = "The regional location for Azure Static Web Apps (Supported: eastus2, centralus, westus2, westeurope, eastasia)."
  type        = string
  default     = "eastus2"
}

variable "resource_group_name" {
  description = "Name of the Azure Resource Group."
  type        = string
  default     = "rg-fleetfuels-prod"
}

variable "static_web_app_name" {
  description = "Name of the Azure Static Web App instance."
  type        = string
  default     = "swa-fleetfuels-prod"
}

variable "sku_tier" {
  description = "The SKU tier of the Static Web App. 'Free' or 'Standard' (Free tier provides £0/mo hosting for commercial static workloads)."
  type        = string
  default     = "Free"
  validation {
    condition     = contains(["Free", "Standard"], var.sku_tier)
    error_message = "The SKU tier must be either 'Free' or 'Standard'."
  }
}

variable "sku_size" {
  description = "The SKU size of the Static Web App. 'Free' or 'Standard'."
  type        = string
  default     = "Free"
}

variable "custom_domain_name" {
  description = "Apex custom domain name for Fleet Fuels."
  type        = string
  default     = "fleetfuels.co.uk"
}

variable "custom_domain_www" {
  description = "WWW custom domain name for Fleet Fuels."
  type        = string
  default     = "www.fleetfuels.co.uk"
}

variable "tags" {
  description = "Resource tags applied to all provisioned infrastructure for cost and environment governance."
  type        = map(string)
  default = {
    Project     = "Fleet Fuels Production Platform"
    ManagedBy   = "Terraform"
    Environment = "Production"
    CostCenter  = "Digital-Infrastructure"
    Owner       = "Fleet Fuels Commercial Management"
    Repository  = "https://github.com/garyfleetfuels/Fleetfuels_Website"
  }
}
