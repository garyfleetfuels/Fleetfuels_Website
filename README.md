# Fleet Fuels - Official Production Web Platform

Production website and commercial fleet fuel card platform for **Fleet Fuels UK** ([https://www.fleetfuels.co.uk](https://www.fleetfuels.co.uk)).

Built with **Astro 7**, **Tailwind CSS**, and **TypeScript**, configured for Node.js 26, and architected for single-branch (`main` = live production) automated deployment to **Azure Static Web Apps (SWA)** via GitHub Actions and Terraform Azure Verified Modules (AVM).

---

## 🚀 Technology Stack & Highlights

- **Framework**: [Astro 7](https://astro.build/) (Static Site Output `output: 'static'`)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with native `@tailwindcss/vite` and brand design tokens
- **Runtime**: Node.js `>=26.0.0`
- **Cloud Hosting**: [Azure Static Web Apps (Standard Tier)](https://azure.microsoft.com/en-gb/products/app-service/static/)
- **Infrastructure as Code (IaC)**: Terraform using official **Azure Verified Modules (AVM)** (`Azure/avm-res-web-staticsite/azurerm`)
- **CI/CD**: GitHub Actions workflow targeting single-branch live deployment on push to `main`
- **SEO & AI Search**: OpenGraph, Schema.org JSON-LD (Organization & WebSite), XML Sitemap, and `/llms.txt`

---

## 🎨 Brand Design System

The platform's aesthetic reflects the Fleet Fuels visual identity:

| Token | Hex Code | Visual Application |
|---|---|---|
| **Primary Brand Green** | `#469B26` | Hero gradients, primary CTAs, droplet logo, metrics highlights |
| **Secondary Dark Charcoal** | `#2D3136` | Headings, road grey cards, dark accents, footer |
| **Light Accent / Mint** | `#EBF5E9` | Category badges, icon container backgrounds, soft glows |
| **Slate Neutrals** | `#F8FAFC` - `#0F172A` | Background layers, high-contrast readable typography, card borders |

---

## 📂 Repository Architecture

```text
├── .github/
│   └── workflows/
│       └── deploy-swa.yml      # Automated GitHub Actions CI/CD to Azure SWA
├── infra/
│   └── terraform/              # IaC using Azure Verified Modules (AVM)
│       ├── main.tf             # AVM static site module declaration
│       ├── variables.tf        # Cloud architecture variables (regions, SKUs)
│       ├── outputs.tf          # Resource IDs, SWA URL, and deployment token
│       ├── versions.tf         # Terraform and AzureRM provider constraints
│       ├── terraform.tfvars.example
│       └── README.md
├── public/
│   ├── favicon.ico             # Brand favicon
│   ├── robots.txt              # Search engine & AI crawler instructions
│   ├── llms.txt                # Curated site summary for LLM search & AI agents
│   └── images/
│       ├── droplet-icon.svg    # Fleet Fuels signature droplet mark
│       └── logo.svg            # Fleet Fuels logo
├── src/
│   ├── components/             # Reusable Astro UI components
│   │   ├── Header.astro        # Responsive navigation & phone quick-dial
│   │   ├── Footer.astro        # Compliance badges, HMRC details, links
│   │   ├── Hero.astro          # High-converting hero with instant quote form
│   │   ├── FuelCardGrid.astro  # Interactive filterable fuel card network cards
│   │   ├── BenefitsSection.astro # Fixed weekly wholesale diesel benefits
│   │   ├── NetworkCoverage.astro # 8,000+ UK forecourt breakdown
│   │   ├── BulkFuelSection.astro # Bulk diesel, HVO, and AdBlue solutions
│   │   └── CtaBanner.astro     # 3-step application callout
│   ├── layouts/
│   │   └── BaseLayout.astro    # Base HTML shell with SEO, OpenGraph & Schema.org
│   ├── pages/
│   │   ├── index.astro         # Homepage assembling core components
│   │   └── 404.astro           # Branded error page for Azure SWA fallback
│   ├── styles/
│   │   └── global.css          # Tailwind imports, CSS theme tokens & utilities
│   └── data/
│       ├── siteData.ts         # Centralised company info, phone, nav links
│       └── fuelCards.ts        # Fuel card network dataset (Keyfuels, UK Fuels, etc.)
├── astro.config.mjs            # Astro configuration (static output, sitemap)
├── package.json                # Project dependencies, scripts, engines (Node >=26)
├── staticwebapp.config.json    # Azure SWA security headers & route rules
├── tailwind.config.mjs         # Tailwind configuration & brand color extensions
├── tsconfig.json               # TypeScript configuration with path aliases
└── README.md
```

---

## 🛠️ Local Development

### 1. Prerequisites
- **Node.js**: `>=26.0.0` (or Node 24+ for local staging)
- **npm**: `>=10.0.0`

### 2. Installation
```bash
git clone https://github.com/garyfleetfuels/Fleetfuels_Website.git
cd Fleetfuels_Website
npm install
```

### 3. Development Server
Start the local Astro development server:
```bash
npm run dev
```
Open `http://localhost:4321` in your browser.

### 4. Production Build & Preview
Validate the static production output:
```bash
npm run build
npm run preview
```
Compiled static assets are generated in the `dist/` directory.

---

## ☁️ Azure Static Web Apps Deployment

### Architecture Model: Single-Branch Live (`main`)

This project implements a continuous deployment strategy where pushes to the `main` branch trigger an automated build and live deployment to Azure Static Web Apps.

### GitHub Actions Workflow (`.github/workflows/deploy-swa.yml`)

1. Triggered on push to `main` (and PRs for preview environments).
2. Sets up Node.js 26.
3. Installs dependencies via `npm ci`.
4. Executes static compilation with `npm run build`.
5. Uses `Azure/static-web-apps-deploy@v1` to publish the pre-built `dist/` folder.

### Required Repository Secret

To link the GitHub repository to the Azure Static Web App:

1. Retrieve the deployment token using Terraform:
   ```bash
   cd infra/terraform
   terraform output -raw api_key
   ```
2. Navigate to your GitHub repository: **Settings > Secrets and variables > Actions**.
3. Create a repository secret named **`AZURE_STATIC_WEB_APPS_API_TOKEN`** and paste the token.

---

## 🏗️ Infrastructure as Code (Terraform)

The Azure Static Web App is provisioned using Terraform with the official Microsoft Azure Verified Module:

```bash
cd infra/terraform
cp terraform.tfvars.example terraform.tfvars
terraform init
terraform plan
terraform apply
```

Refer to [infra/terraform/README.md](infra/terraform/README.md) for full cloud architecture details.
