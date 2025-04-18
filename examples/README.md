# IGDB Types Usage Examples

This directory contains examples demonstrating how to use the `igdb-types` package in various scenarios. These examples are designed to help you understand how to effectively use the TypeScript type definitions for the IGDB API.

## Examples Overview

### 1. Basic Usage (`basic-usage.ts`)

Demonstrates how to use the basic types from the package, focusing on the `Game` type with proper type checking.

Key concepts:
- Importing types from the package
- Creating objects with proper typing
- Type-safe property access
- Type checking benefits

### 2. Working with Relationships (`relationships.ts`)

Shows how to handle relationships between types, including both ID references and expanded objects.

Key concepts:
- Handling unexpanded relationships (ID references)
- Working with expanded relationships (full objects)
- Type-safe access to nested relationships
- Handling both expanded and unexpanded data in functions

### 3. Using Enums (`using-enums.ts`)

Demonstrates how to use enums for type-safe categorical data in game objects.

Key concepts:
- Using enums for game status, categories, etc.
- Type-safe enum comparisons
- Using enums in conditional logic
- Filtering by enum values

### 4. API Integration (`api-integration.ts`)

Shows how to integrate with the IGDB API using the types from the package.

Key concepts:
- Making API requests with proper typing
- Handling typed API responses
- Processing expanded relationships in responses
- Building complex API queries

## Running the Examples

These examples are TypeScript files that demonstrate type usage. They are not meant to be run directly as they focus on type definitions rather than runtime behavior. However, you can use them as reference for your own implementation.

If you want to execute the examples (after adding your own API credentials where needed):

1. Compile the TypeScript files:
   ```bash
   tsc examples/basic-usage.ts
   ```

2. Run the compiled JavaScript:
   ```bash
   node examples/basic-usage.js
   ```
   or 
   ```bash
   bun examples/basic-usage.js
   ```

## Notes

- The API integration example uses mock data for demonstration purposes. To use it with the actual IGDB API, you would need to:
  - Install axios: `npm install axios` or `bun install axios`
  - Uncomment the axios import and implementation
  - Replace the placeholder credentials with your own Twitch Client ID and OAuth access token

- These examples demonstrate type usage and may not cover all edge cases or best practices for production code.

- For more information about the IGDB API, visit the [official IGDB API documentation](https://api-docs.igdb.com/).