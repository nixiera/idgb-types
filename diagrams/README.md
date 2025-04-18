# IGDB Types Relationship Diagrams

This directory contains visual diagrams that illustrate the relationships between different types in the IGDB API. These diagrams are designed to help developers understand the structure of the API and how different entities relate to each other.

## Available Diagrams

1. [Game Type Relationships](./game-relationships.md) - Shows the relationships between the `Game` type and other major types
2. [Platform Type Relationships](./platform-relationships.md) - Shows the relationships between the `Platform` type and other types
3. [Company Type Relationships](./company-relationships.md) - Shows the relationships between the `Company` type and other types

## How to Use These Diagrams

These diagrams are created using [Mermaid.js](https://mermaid-js.github.io/mermaid/), a JavaScript-based diagramming and charting tool. To view these diagrams:

1. **GitHub**: If you're viewing these files on GitHub, the diagrams will render automatically in the browser.
2. **VS Code**: If you're using Visual Studio Code, you can install the [Mermaid extension](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid) to view the diagrams directly in the editor.
3. **Other Markdown Viewers**: Many Markdown viewers and editors support Mermaid diagrams. If your viewer doesn't support Mermaid, you can copy the diagram code and paste it into the [Mermaid Live Editor](https://mermaid-js.github.io/mermaid-live-editor/).

## Understanding the Diagrams

The diagrams use UML class diagram notation with some simplifications:

- **Classes**: Represent types in the IGDB API
- **Relationships**: Show how types are related to each other
- **Properties**: Show the most important properties of each type

### Relationship Notation

- `Type1 <|-- Type2 : property` means that `Type1` has a property called `property` that references `Type2`
- `[]` suffix indicates an array of items (one-to-many relationship)
- No suffix indicates a single item (one-to-one relationship)

### Expansion Pattern

In the IGDB API, relationships can be represented in two ways:

1. **ID References**: Properties contain numeric IDs that reference other entities
2. **Expanded Objects**: Properties contain the full objects of the related entities

This is represented in the type definitions using union types, for example:

```
// Example of a relationship property in the Game type
genres?: number[] | Genre[];
```

## Contributing

If you'd like to improve these diagrams or add new ones:

1. Fork the repository
2. Make your changes
3. Submit a pull request

When creating new diagrams, please follow the existing format and naming conventions.