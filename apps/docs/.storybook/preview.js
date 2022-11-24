import { addParameters } from '@storybook/react';
import '@elementail/core/tailwind.css'

addParameters({
  badgesConfig: {
    hooks: {
      styles: {
        backgroundColor: '#FFF',
        borderColor: '#018786',
        color: '#018786',
      },
      title: 'Hooks',
    },
    core: {
      styles: {
        backgroundColor: '#FFF',
        borderColor: '#6200EE',
        color: '#6200EE',
      },
      title: 'Core',
    },
  },
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
