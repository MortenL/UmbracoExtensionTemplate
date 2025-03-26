# Umbraco 15 Extension Starter

A modern starting point for developing Umbraco 15 backoffice extensions using TypeScript, Lit components, and Vite.

## Features

- **Custom Dashboard**: Create beautiful dashboards using Lit components
- **Custom Sections**: Add new sections to the Umbraco backoffice
- **Entity Actions**: Implement custom actions for content and media items
- **Modern Frontend**: Built with TypeScript, Lit components, and Vite
- **Best Practices**: Follows Umbraco 15 extension development guidelines

## Prerequisites

- .NET 9.0 SDK or later
- Node.js 18.0 or later
- pnpm (preferred package manager)
- Umbraco 15 CMS

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```
   pnpm install
   ```
3. Build the frontend assets:
   ```
   pnpm run build
   ```
4. Build the .NET project:
   ```
   dotnet build
   ```
5. Reference this project in your Umbraco 15 solution

## Project Structure

```
UmbracoPlugin/
├── src/
│   ├── backoffice/         # Frontend source code
│   │   ├── components/     # Lit components
│   │   ├── dashboards/     # Dashboard extensions
│   │   ├── sections/       # Section extensions
│   │   ├── entity-actions/ # Entity action extensions
│   │   └── manifests/      # Extension manifests
│   └── Models/             # .NET models
├── wwwroot/                # Compiled frontend assets
├── package.json            # Frontend dependencies
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite build configuration
└── UmbracoPlugin.csproj    # .NET project file
```

## Development Workflow

1. Make changes to your TypeScript/Lit components
2. Run `pnpm run dev` for development with hot reloading
3. Run `pnpm run build` to build for production
4. Build and deploy your .NET project

## Extension Types

This starter includes examples for the following Umbraco 15 extension types:

- **Sections**: Custom navigation items in the backoffice
- **Dashboards**: Tabs that appear in sections with useful information
- **Entity Actions**: Actions that can be performed on specific items

## URL Structure

The extension follows Umbraco 15's routing conventions:

```
/section/{section-alias}/{route}/{id}
```

## Resources

- [Umbraco 15 Documentation](https://docs.umbraco.com)
- [Umbraco Extensions Documentation](https://docs.umbraco.com/umbraco-cms/extending)
- [Lit Documentation](https://lit.dev/)

## License

MIT
