# Contributing to igdb-types

Thank you for your interest in contributing to igdb-types! This document provides guidelines and instructions for contributing to this project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Documentation](#documentation)
- [Versioning](#versioning)
- [Testing](#testing)
- [Community](#community)

## Code of Conduct

We are committed to providing a friendly, safe, and welcoming environment for all contributors. By participating in this project, you agree to abide by the following guidelines:

- Be respectful and inclusive of differing viewpoints and experiences
- Use welcoming and inclusive language
- Accept constructive criticism gracefully
- Focus on what is best for the community
- Show empathy towards other community members

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- npm or bun package manager
- Basic knowledge of TypeScript
- Familiarity with the IGDB API

### Setup

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/idgb-types.git
   cd idgb-types
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   bun install
   ```
4. Create a new branch for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

1. Make your changes to the codebase
2. Build the project to ensure your changes compile:
   ```bash
   npm run build
   # or
   bun run build
   ```
3. Generate documentation if you've made changes to types or added new ones:
   ```bash
   npm run docs
   # or
   bun run docs
   ```
4. Preview the documentation locally:
   ```bash
   npm run docs:serve
   # or
   bun run docs:serve
   ```
5. Commit your changes with a descriptive commit message
6. Push your changes to your fork
7. Submit a pull request

## Pull Request Process

1. Ensure your PR includes a clear description of the changes and the purpose
2. Update the README.md or other documentation if necessary
3. Make sure your code builds without errors
4. Link any related issues in your PR description
5. Be responsive to feedback and be willing to make changes if requested
6. Your PR will be reviewed by maintainers who may suggest changes

## Coding Standards

### TypeScript Guidelines

- Use TypeScript's strict mode
- Prefer interfaces over types for object definitions
- Use proper JSDoc comments for all public types and functions
- Follow the existing naming conventions:
  - Use PascalCase for type names, interfaces, and enums
  - Use camelCase for properties and methods
  - Use snake_case for properties that match IGDB API field names
- Avoid any and unknown types when possible
- Use more specific primitive types where applicable (see utility types)

### File Organization

- Place new types in the appropriate directory under `src/types/`
- Place new enums in the appropriate directory under `src/enums/`
- Ensure all new files are exported from the relevant index.ts file
- Follow the existing file naming conventions

## Documentation

Good documentation is crucial for this project. Please follow these guidelines:

1. Add JSDoc comments to all types, interfaces, and enums
2. Include a description of what the type represents
3. For types that correspond to IGDB API endpoints, include:
   - The request path (e.g., `https://api.igdb.com/v4/games`)
   - A brief description of the endpoint
4. Document each property with a clear description
5. Mark deprecated fields with `@deprecated` and include information about what to use instead
6. Include examples where appropriate

Example:
```typescript
/**
 * Represents game information.
 *
 * Request Path: https://api.igdb.com/v4/games
 * Description: Video Games!
 */
export type Game = {
    /** Array of Age Rating IDs. The PEGI rating. */
    age_ratings?: number[] | AgeRating[];
    
    /** @deprecated DEPRECATED! Use `game_status` instead. */
    status?: number | GameStatusEnum;
    
    // Other properties...
};
```

## Versioning

This project follows Semantic Versioning (SemVer). Please read our [versioning strategy](./docs/VERSION.md) for detailed information on how we handle:

- Version increments
- Breaking changes
- Deprecations
- API changes from IGDB

When contributing, consider the impact of your changes:
- Bug fixes should be marked as PATCH changes
- New features or non-breaking additions should be marked as MINOR changes
- Breaking changes should be marked as MAJOR changes

If you're unsure about the impact of your changes, discuss it in your PR description.

## Testing

Currently, the project is focused on type definitions and doesn't have automated tests. However, you should:

1. Manually verify that your types accurately represent the IGDB API responses
2. Check that your changes build without errors
3. Ensure documentation is generated correctly

In the future, we plan to add automated tests. If you'd like to contribute to this effort, please open an issue to discuss your approach.

## Community

- Feel free to open issues for bugs, feature requests, or questions
- Join discussions on existing issues
- Share your experience using this package

Thank you for contributing to igdb-types!