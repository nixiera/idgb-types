# Changelog

All notable changes to the igdb-types package will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Visual diagrams of type relationships
  - Created Mermaid.js diagrams showing relationships between types
  - Added diagrams for Game, Platform, and Company relationships
  - Included documentation on how to use and interpret the diagrams

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

[Unreleased]: https://github.com/nixiera/idgb-types/compare/v0.4.2...HEAD
[0.4.2]: https://github.com/nixiera/idgb-types/compare/v0.4.1...v0.4.2
[0.4.1]: https://github.com/nixiera/idgb-types/compare/v0.4.0...v0.4.1
[0.4.0]: https://github.com/nixiera/idgb-types/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/nixiera/idgb-types/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/nixiera/idgb-types/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/nixiera/idgb-types/releases/tag/v0.1.0
