# Versioning Strategy for igdb-types

This document outlines the versioning strategy for the igdb-types package. It provides guidelines for how versions are incremented, how breaking changes are handled, and how deprecated fields are managed.

## Semantic Versioning

The igdb-types package follows [Semantic Versioning 2.0.0](https://semver.org/). Version numbers are in the format of MAJOR.MINOR.PATCH:

1. **MAJOR** version is incremented for incompatible API changes that require users to modify their code.
2. **MINOR** version is incremented for functionality additions that are backward compatible.
3. **PATCH** version is incremented for backward compatible bug fixes.

## Version Compatibility with IGDB API

The igdb-types package aims to maintain compatibility with the IGDB API. The versioning strategy takes into account changes in the IGDB API:

1. Changes to the IGDB API that add new fields or endpoints will result in a MINOR version increment.
2. Changes to the IGDB API that modify or remove existing fields will be handled according to the guidelines below.

## Guidelines for Breaking Changes

Breaking changes include:

1. Removing a field or type that was previously available
2. Changing the type of a field in a way that's not backward compatible
3. Changing the behavior of a type in a way that could break existing code

When a breaking change is necessary:

1. The change will be documented in the CHANGELOG.md file under a new MAJOR version.
2. When possible, a migration guide will be provided to help users update their code.
3. Breaking changes will be batched together when possible to minimize the frequency of MAJOR version increments.

## Deprecation Process

To maintain backward compatibility while evolving the library, the following deprecation process is used:

1. **Deprecation Marking**: Fields or types that are planned for removal are marked with a `@deprecated` JSDoc tag, including information about what to use instead.

2. **Deprecation Period**: Deprecated fields or types will remain in the library for at least one MAJOR version to give users time to update their code.

3. **Removal**: Deprecated fields or types will only be removed in a MAJOR version update, and the removal will be clearly documented in the CHANGELOG.md file.

## Version Compatibility Information

To help users understand compatibility between versions:

1. Each MAJOR version will have a dedicated section in the CHANGELOG.md file.
2. The README.md file will include information about the current version and any important compatibility notes.
3. Type definitions will include JSDoc comments with version information for deprecated fields.

## Example Version Increments

Here are examples of changes and their corresponding version increments:

- **PATCH (0.4.2 → 0.4.3)**: Fixing a typo in a field description, correcting an incorrect type definition without changing behavior.
- **MINOR (0.4.2 → 0.5.0)**: Adding new fields or types to match IGDB API updates, adding new utility types, improving documentation.
- **MAJOR (0.4.2 → 1.0.0)**: Removing deprecated fields, changing the type of a field in a way that could break existing code, restructuring the library's architecture.

## Handling API Changes from IGDB

When the IGDB API changes:

1. **New Fields/Endpoints**: Added as soon as possible in a MINOR version update.
2. **Changed Fields**: 
   - If the change is backward compatible, it will be included in a MINOR version update.
   - If the change is not backward compatible, the old field will be deprecated and a new field will be added in a MINOR version update. The deprecated field will be removed in a future MAJOR version update.
3. **Removed Fields**: Marked as deprecated in a MINOR version update and removed in a future MAJOR version update.

## Pre-release Versions

For significant changes or experimental features, pre-release versions may be used:

- **Alpha (0.5.0-alpha.1)**: Early development versions with potentially unstable features.
- **Beta (0.5.0-beta.1)**: More stable pre-release versions for testing.
- **Release Candidate (0.5.0-rc.1)**: Final testing before a stable release.

## Version Enforcement

To ensure consistent versioning:

1. All version changes must be documented in the CHANGELOG.md file.
2. The version in package.json must match the latest version in the CHANGELOG.md file.
3. Git tags will be used to mark each release version.

## Conclusion

This versioning strategy aims to provide a balance between evolving the library to match the IGDB API and maintaining backward compatibility for users. By following these guidelines, we can ensure that users can update to new versions with confidence, understanding the impact of each update on their code.