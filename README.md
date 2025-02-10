# how-to-create-a-cypress-plugin

This plugin serves as an example of how to create a Cypress npm plugin. It features two custom commands: one for comparing aliases and another for styled logging within the Cypress runner log.

You can read the full post on how to create a Cypress npm plugin in my blog entry titled "[The Quirky Guide to Crafting and Publishing Your Cypress npm Plugin](https://dev.to/sebastianclavijo/the-quirky-guide-to-crafting-and-publishing-your-cypress-npm-plugin-2pii "The Quirky Guide to Crafting and Publishing Your Cypress npm Plugin")".

If you'd like to support my work, consider buying me a coffee or contributing to a training session, so I can keep learning and sharing cool stuff with all of you. Thank you for your support!

<a href="https://www.buymeacoffee.com/sclavijosuero" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 40px !important;width: 150px !important;" ></a>

## Installation

Install the plugin by running:

```bash
npm install how-to-create-a-cypress-plugin --save-dev
```

## Compatibility

This plugin is compatible with Cypress version 12.0.0 and above.

## Configuration

No additional configuration is needed to use these commands beyond the standard Cypress setup.

## API Reference

The plugin provides the following commands:

- **`compareAliases(chainer, alias1, alias2)`**: Compares two aliases using the specified chainer.
- **`colorLog(message, hexColor, options)`**: Logs a message in the Cypress runner with the specified color and options.

## Usage

Before utilizing the custom commands, import them at the beginning of your Cypress test files.

To load only the assertions commands:
``` javascript
import 'how-to-create-a-cypress-plugin/src/assertions';
```

To load only the custom log commands:
``` javascript
import 'how-to-create-a-cypress-plugin/src/custom-log';
```

To load both sets of commands:
``` javascript
import 'how-to-create-a-cypress-plugin';
```

Remember to use the correct import statement depending on which commands you need for your tests.

### Assertions

Use `cy.compareAliases()` to assert the equality of two aliases:

``` javascript
// Define aliases
cy.get('@aliasOne').as('firstAlias');
cy.get('@aliasTwo').as('secondAlias');

// Compare the aliases
cy.compareAliases('deep.equal', '@firstAlias', '@secondAlias');
```

### Custom Log

Use `cy.colorLog()` to output styled messages in the Cypress runner:

``` javascript
// Log a message with color
cy.colorLog('Message content', '#FF0000', {
    displayName: "Error",
    data: { detail: 'Error details' }
});
```

## License

This plugin is licensed under the MIT License. See LICENSE for full license text.

## Changelog

1.0.1 Fix documentation typos
 - https://github.com/sclavijosuero/how-to-create-a-cypress-plugin/issues/1
 - https://github.com/sclavijosuero/how-to-create-a-cypress-plugin/issues/2

1.0.0 Initial release
