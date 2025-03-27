# Umbraco 15 Extension Starter

A modern starting point for developing Umbraco 15 backoffice extensions using TypeScript, Lit components, and Vite.

## Features

- **Custom Dashboard**: Create beautiful dashboards using Lit components
- **Custom Sections**: Add new sections to the Umbraco backoffice
- **Entity Actions**: Implement custom actions for content and media items
- **API Integration**: Secure API communication with Umbraco backoffice
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
├── MySite.BackofficeExtension/        # Frontend extension project
│   ├── src/                           # Frontend source code
│   │   ├── section/                   # Section and workspace components
│   │   │   └── workspace/             # Workspace components
│   │   │       └── overview/          # Overview workspace components
│   │   ├── services/                  # Service classes
│   │   │   └── api.service.ts         # API communication service
│   │   ├── entrypoint.ts              # OpenAPI configuration
│   │   └── index.ts                   # Main entry point
│   ├── package.json                   # Frontend dependencies
│   ├── tsconfig.json                  # TypeScript configuration
│   └── vite.config.ts                 # Vite build configuration
│
├── MySite.BackofficeExtension.Core/   # Backend C# project
│   ├── Controllers/                   # API controllers
│   │   └── MyApiController.cs         # Main API controller
│   ├── Models/                        # Data models
│   │   └── MyDataModel.cs             # Main data model
│   └── Services/                      # Backend services
└── MySite.Umbraco/                    # Umbraco site project
```

## Development Workflow

1. Make changes to your TypeScript/Lit components
2. Run `pnpm run dev` for development with hot reloading
3. Run `pnpm run build` to build for production
4. Build and deploy your .NET project

## API Authentication

This project demonstrates secure API communication with the Umbraco backoffice:

1. **API Service**: The `ApiService` class handles communication with the backend API:
   - Uses proper URL patterns that match controller route attributes
   - Handles authentication tokens via Umbraco's OpenAPI configuration
   - Includes error handling and debugging information

2. **URL Patterns**: The API endpoints follow Umbraco's routing conventions:
   - Base URL: `/umbraco/management/api/v1/MySiteApi`
   - GET (all items): Base URL with no additional path
   - GET (by ID): `${baseUrl}/${id}`
   - POST (save): Base URL with no additional path

3. **Authentication**: Implemented using Umbraco's authentication system:
   - Uses the OpenAPI.TOKEN function to get authentication tokens
   - Includes the token in the Authorization header
   - Uses credentials: 'include' to ensure cookies are sent with requests

## UI Components

The extension uses Umbraco UI components to create a consistent user experience:

- **Tables**: Uses `uui-table` components with proper column configuration
- **Badges**: Uses `uui-tag` for status indicators
- **Buttons**: Uses `uui-button` for actions
- **Boxes**: Uses `uui-box` for content containers

## Extension Types

This starter includes examples for the following Umbraco 15 extension types:

- **Sections**: Custom navigation items in the backoffice
- **Workspaces**: Content areas within sections
- **API Controllers**: Backend endpoints for data operations

## URL Structure

The extension follows Umbraco 15's routing conventions:

```
/section/{section-alias}/{route}/{id}
```

For API endpoints:

```
/umbraco/management/api/v1/{api-name}/{id?}
```

## Resources

- [Umbraco 15 Documentation](https://docs.umbraco.com)
- [Umbraco Extensions Documentation](https://docs.umbraco.com/umbraco-cms/extending)
- [Lit Documentation](https://lit.dev/)

## License

MIT
