# Fleet Fuels Infrastructure as Code (Azure SWA)

Production-grade Terraform configuration utilizing the official **Azure Verified Module (AVM)** (`Azure/avm-res-web-staticsite/azurerm`) to provision Azure Static Web Apps for `https://www.fleetfuels.co.uk`.

---

## 📋 Prerequisites

1. [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli) authenticated with administrative privileges on your target Azure subscription:
   ```bash
   az login
   az account list --output table
   az account set --subscription "<SUBSCRIPTION_ID_OR_NAME>"
   ```
2. [Terraform CLI](https://www.terraform.io/downloads.html) (version `>= 1.6.0`).

---

## 🚀 Step-by-Step Deployment Runbook

### 1. Configure Variables
Copy the example variable file and review parameters:
```bash
cp terraform.tfvars.example terraform.tfvars
```

### 2. Initialize Terraform Working Directory
Downloads provider plugins (`azurerm ~> 4.0`, `azapi`, `modtm`) and the official AVM module:
```bash
terraform init
```

### 3. Validate Configuration & Formatting
Verify syntax and code structure:
```bash
terraform fmt -check
terraform validate
```

### 4. Generate & Review Execution Plan
Plan the infrastructure changes targeting Azure Resource Manager:
```bash
terraform plan -out=tfplan
```

### 5. Provision Infrastructure
Apply the approved plan to create `rg-fleetfuels-prod` and `swa-fleetfuels-prod`:
```bash
terraform apply tfplan
```

### 6. Extract CI/CD Deployment Token
Retrieve the sensitive Azure Static Web App API deployment token:
```bash
terraform output -raw static_web_app_api_key
```

### 7. Configure GitHub Actions Secret
1. Open the repository secrets page:
   `https://github.com/garyfleetfuels/Fleetfuels_Website/settings/secrets/actions`
2. Click **New repository secret**.
3. Name: `AZURE_STATIC_WEB_APPS_API_TOKEN`
4. Value: Paste the output token from Step 6.
5. Click **Add secret**.

### 8. Deploy Production Application
Push any commit to the `main` branch or trigger manually via GitHub Actions workflow dispatch:
```bash
git push origin main
```
The automated workflow (`.github/workflows/deploy-swa.yml`) will build and publish the site to your live Azure Static Web App.

---

## 📤 Outputs

- `static_web_app_default_hostname`: Azure-assigned hostname (e.g., `ashy-island-0a1b2c3d.azurestaticapps.net`).
- `static_web_app_api_key`: Secret deployment token required by GitHub Actions (`sensitive = true`).
- `resource_group_name`: Name of the resource group (`rg-fleetfuels-prod`).
