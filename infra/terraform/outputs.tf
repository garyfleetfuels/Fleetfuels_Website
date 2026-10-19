output "resource_group_name" {
  description = "The name of the Resource Group hosting the Fleet Fuels Static Web App."
  value       = azurerm_resource_group.rg.name
}

output "static_web_app_default_hostname" {
  description = "The default Azure-generated hostname for the Static Web App."
  value       = module.avm_res_web_staticsite.resource_uri
}

output "static_web_app_id" {
  description = "The Azure Resource ID of the Static Web App."
  value       = module.avm_res_web_staticsite.resource_id
  sensitive   = true
}

output "static_web_app_name" {
  description = "The name of the Static Web App."
  value       = module.avm_res_web_staticsite.name
}
