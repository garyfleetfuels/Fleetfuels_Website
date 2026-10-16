output "resource_group_name" {
  description = "The name of the Resource Group hosting the Fleet Fuels Static Web App."
  value       = azurerm_resource_group.rg.name
}

output "static_web_app_default_hostname" {
  description = "The default Azure-generated hostname for the Static Web App."
  value       = module.avm_res_web_staticsite.resource_uri
}

output "static_web_app_api_key" {
  description = "The API/Deployment Token for GitHub Actions CI/CD (Secret: AZURE_STATIC_WEB_APPS_API_TOKEN)."
  value       = module.avm_res_web_staticsite.api_key
  sensitive   = true
}

output "static_web_app_id" {
  description = "The Azure Resource ID of the Static Web App."
  value       = module.avm_res_web_staticsite.resource_id
}

output "static_web_app_name" {
  description = "The name of the Static Web App."
  value       = module.avm_res_web_staticsite.name
}
