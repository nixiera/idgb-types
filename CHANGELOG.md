# Changelog

All notable changes to the igdb-types package will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## 0.5.0 - 2025-04-18

### Added
- Runtime type validation using Zod
  - Added validators for all enum types
  - Added validators for core type definitions
  - Implemented utility functions for common validation patterns
  - Added type guard functions for runtime type checking
  - Provided comprehensive documentation and examples
- Comprehensive documentation of type-endpoint relationships
  - Created detailed mapping between TypeScript types and IGDB API endpoints
  - Organized endpoints into logical categories for easier reference
  - Added examples of how to use endpoints with TypeScript types
  - Included examples of relationship expansion and multi-endpoint queries
- Visual diagrams of type relationships
  - Created Mermaid.js diagrams showing relationships between types
  - Added diagrams for Game, Platform, and Company relationships
  - Included documentation on how to use and interpret the diagrams
- Implemented versioning strategy for API changes
  - Created VERSION.md with detailed guidelines for semantic versioning
  - Established clear process for handling breaking changes and deprecations
  - Added version compatibility information to documentation

### Changed
- Improved JSDoc comments with more detailed descriptions and examples
  - Added comprehensive JSDoc comments to enum files
  - Enhanced existing JSDoc comments in type files with more detailed descriptions and usage examples
  - Added references to IGDB API documentation

## [0.4.2] - 2023-12-15

### Added
- Index files for each subdirectory, to improve import experience
- Main index.ts now uses these index files for cleaner exports

### Changed
- Implemented consistent naming convention for all files and types
  - Type files: PascalCase.ts
  - Enum files: PascalCaseEnum.ts
  - Type names: PascalCase
  - Enum names: PascalCaseEnum
  - Enum values: UPPER_SNAKE_CASE
  - Properties: snake_case
- Updated all enum values to use UPPER_SNAKE_CASE for consistency

## [0.4.1] - 2023-11-30

### Added
- Additional type definitions for IGDB API endpoints
- Improved documentation for types

### Fixed
- Type inconsistencies in several interfaces

## [0.4.0] - 2023-11-15

### Added
- Support for new IGDB API endpoints
- Enhanced type safety for existing endpoints

### Changed
- Updated TypeScript peer dependency to ^5.8.3

## [0.3.0] - 2023-10-01

### Added
- Comprehensive type definitions for IGDB API
- Support for relationship expansion in types

## [0.2.0] - 2023-09-15

### Added
- Initial set of type definitions for core IGDB entities
- Basic documentation

## [0.1.0] - 2023-09-01

### Added
- Project initialization
- Basic project structure
- Core type definitions

[0.5.0]: https://github.com/nixiera/idgb-types/compare/v0.4.2...HEAD
[0.4.2]: https://github.com/nixiera/idgb-types/compare/v0.4.1...v0.4.2
[0.4.1]: https://github.com/nixiera/idgb-types/compare/v0.4.0...v0.4.1
[0.4.0]: https://github.com/nixiera/idgb-types/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/nixiera/idgb-types/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/nixiera/idgb-types/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/nixiera/idgb-types/releases/tag/v0.1.0
