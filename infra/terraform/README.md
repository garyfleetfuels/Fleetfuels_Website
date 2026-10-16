# Fleet Fuels Infrastructure as Code (Azure SWA)

This directory contains production-ready Terraform configurations utilizing the official **Azure Verified Module (AVM)** (`Azure/avm-res-web-staticsite/azurerm`) to provision Azure Static Web Apps for `https://www.fleetfuels.co.uk`.

## Prerequisites

1. [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli) authenticated to your target subscription:
   ```bash
   az login
   az account set --subscription "<SUBSCRIPTION_ID>"
   ```
2. [Terraform CLI](https://www.terraform.io/downloads.html) (version `>= 1.6.0`).

## Deployment Steps

1. **Copy configuration variables**:
   ```bash
   cp terraform.tfvars.example terraform.tfvars
   ```

2. **Initialize Terraform**:
   ```bash
   terraform init
   ```

3. **Review execution plan**:
   ```bash
   terraform plan -out=tfplan
   ```

4. **Apply configuration**:
   ```bash
   terraform apply tfplan
   ```

5. **Retrieve GitHub Actions CI/CD Deployment Token**:
   Run the following command to retrieve the SWA API token and add it as a secret (`AZURE_STATIC_WEB_APPS_API_TOKEN`) in your GitHub repository:
   ```bash
   terraform output -raw api_key
   ```
