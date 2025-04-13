# igdb-types


[![npm version](https://badge.fury.io/js/igdb-types.svg)](https://badge.fury.io/js/igdb-types)

An unofficial TypeScript type definitions package for the IGDB API responses. This package aims to provide developers with strongly-typed interfaces for working with IGDB data, enhancing development speed and reducing errors.

**Important Notes:**

* **Unofficial and Community-Maintained:** This is a passion project developed and maintained by a single developer. It is not officially supported or endorsed by IGDB.
* **Maintenance Effort:** I will do my best to keep the types up-to-date with IGDB's API. However, due to the unofficial nature, there may be delays or inaccuracies.
* **Contributions Welcome:** If you find errors or have improvements, please feel free to submit pull requests.
* **Relationship Expansion:** Most fields with a secondary key also have an optional Type apart from ID, in case if the relationship needs to be expanded.
* **Use at your own risk.** As this is not an offical package, there is no warrenty.

## Installation

```bash
npm install igdb-types

bun install igdb-types
```

## Usage

```typescript
import { Game, Company } from 'igdb-types';

// Use the types in your code
const game: Game = {
 
};
```

## Development

To install dependencies:

```bash
npm install

bun install
```

To build the package:

```bash
npm run build

bun run build
```

## License

MIT

## Contributing

If you'd like to contribute, please submit a pull request with your changes.

## Disclaimer

This package is provided "as is," without warranty of any kind. The maintainer is not responsible for any issues arising from the use of these type definitions.