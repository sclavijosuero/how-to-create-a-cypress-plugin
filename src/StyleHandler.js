export default class StyleHandler {

    static cachedStyles = new Set()

    static getStyleName = (hexColor = '#FFFFFF') => {
        const styleName = `colorLog${hexColor.replace("#", "-")}`

        if (!StyleHandler.cachedStyles.has(styleName)) {
            StyleHandler._createStyle(styleName, hexColor) // Create style element in the document
            StyleHandler.cachedStyles.add(styleName) // Cache the style name
        }

        return styleName
    }

    static _createStyle = (styleName, hexColor) => {
        const style = document.createElement('style')

        style.textContent = `
            .command.command-name-${styleName} span.command-method {
                color: ${hexColor} !important;
                text-transform: uppercase;
                font-weight: bold;
                background-color: none;
                border-color: none;
            }
    
            .command.command-name-${styleName} span.command-message{
                color: ${hexColor} !important;
                font-weight: normal;
                background-color: none;
                border-color: none;
            }
    
            .command.command-name-${styleName} span.command-message strong,
            .command.command-name-${styleName} span.command-message em { 
                color: ${hexColor} !important;
                background-color: none;
                border-color: none;
            }
        `
    
        Cypress.$(window.top.document.head).append(style)
    }
}