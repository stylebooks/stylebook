![License](https://img.shields.io/github/license/stylebooks/stylebook.svg?style=flat-square&color=9cf)
![Last commit](https://img.shields.io/github/last-commit/stylebooks/stylebook.svg?style=flat-square&color=blueviolet)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square&color=ff69b4)](http://commitizen.github.io/cz-cli)

## Motivation

Stylebook is a [Storybook](https://storybook.js.org/) addon that makes easier customizing you storybook!
This addon uses storybook global themification API to expose an incredible collection of complex themes created from unique color palettes, it also adds special themification features like:

- Splash screen
- Toggle themes (light and dark)
- Multiple themes

See [usage](#usage) and [options](#options) below and see how to configure each one of these options, it's one line configuration code! EASY PEASY!

## Getting started

- 💻 [Installation](#installation)
- 🎯 [Usage](#usage)
- ⚙️ [Options](#options)
- 🤓 [License](#license)

## 💻 Installation

First of all, install Stylebook packages in your project as dev dependencies.
You'll need two packages, one for the addon and one for the themes.

```sh
yarn add -D @stylebook/addon @stylebook/themes
```

## 🎯 Usage

### Configure your storybook

The main configuration file is `main.js` (inside .storybook folder). This file controls the behaviour of the Storybook server (so you must restart Storybook’s process when you change it) and it's where you list the addons you are using, this is called 'registering an addon'.

```js
// .storybook/main.js

module.exports = {
  stories: ['../src/**/*.stories.@(js|mdx)'],
  addons: ['@stylebook/addon'],
};
```

### Configure your theme

The addon config file is `preview.js` (inside .storybook folder too). This file allows you to add configuration parameters or decorators to an addon, in our sample case will look like this:

```js
import { addDecorator } from '@storybook/react';

// import addon and the chosen theme packages from installed packages
import withStyleBook from '@stylebook/addon';
import PurpleRain from '@stylebook/themes';

// define the globalTypes addon decorator configuration
export const globalTypes = {
  stylebook: {
    mode: 'single',
    theme: PurpleRain,
  },
};

// add the stylebook addon decorator
addDecorator(withStyleBook);
```

Easy, huh?

## ⚙️ Options

Stylebook brings cool features that you can enable! Check it out:

### Available Options

| Name     | Type   | Required | Description                                                                    | Default  |
| -------- | ------ | -------- | ------------------------------------------------------------------------------ | -------- |
| `mode`   | String | false    | Defines how stylebook will handle one or multiple themes in storybook toolbar. | `single` |
| `theme`  | Theme  | true     | The theme or themes you want to set.                                           | -        |
| `splash` | Object | false    | Splash screen options.                                                         | -        |
| `logo`   | Object | false    | Logo options for showing in the manager bar.                                   | -        |

#### Mode

Mode defines how Stylebook will handle one or multiple themes in Storybook's toolbar, there are 3 options available:

| Name     | Description                                                                                                                 | Themes    |
| -------- | --------------------------------------------------------------------------------------------------------------------------- | --------- |
| `single` | If you want to use only one theme for the doc, this is the option for you. This doesn't add options at storybook's toolbar. | 1         |
| `toggle` | Enables a toggle button in toolbar that allows you to toggle between two themes (usually light and dark).                   | 2         |
| `multi`  | Enable multi-theme dropdown in toolbar allowing the user choose one of them.                                                | 3 or more |

#### Theme

This option is responsible for setting the chosen theme for your storybook.
This one is simple, if you choose mode `single` you just have to pass your imported theme, if you choose `toggle` or `multi` pass your theme as an array, like this:

```js
import { addDecorator } from '@storybook/react';

// import addon and the chosen theme packages from installed packages
import withStyleBook from '@stylebook/addon';
import { Theme1, Theme2 } from '@stylebook/themes';

// define the globalTypes addon decorator configuration
export const globalTypes = {
  stylebook: {
    mode: 'toggle',
    theme: [Theme1, Theme2],
  },
};

// add the stylebook addon decorator
addDecorator(withStyleBook);
```

#### Splash

When enabled, this option shows a splash screen with a custom image when the storybook starts (fancy!)

| Name    | Type   | Required | Description                              |
| ------- | ------ | -------- | ---------------------------------------- |
| `src`   | String | true     | Image path for you logo or custom image. |
| `width` | Number | true     | The theme or themes you want to set.     |

See that sample below:

```js
import { addDecorator } from '@storybook/react';

import PurpleRain from '@stylebook/themes';
import withStyleBook from '@stylebook/addon';

export const globalTypes = {
  stylebook: {
    mode: 'single',
    theme: PurpleRain,
    splash: {
      src: 'https://placehold.it/350x150',
      width: 200,
    },
  },
};

addDecorator(withStyleBook);
```

#### Logo

If you want to use your company logo on the left bar, now it's easier, just pass the logo option with the listed fields below:

| Name    | Type   | Required | Description                                                            |
| ------- | ------ | -------- | ---------------------------------------------------------------------- |
| `src`   | String | true     | Image path for you logo or custom image.                               |
| `title` | Number | true     | This is your image title, will be used as `alt` on `img` tag.          |
| `url`   | Number | true     | Specifies the URL of the page the link goes to when clicking the logo. |

You can combine the `logo` option with the `splash` option:

```js
import { addDecorator } from '@storybook/react';

import PurpleRain from '@stylebook/themes';
import withStyleBook from '@stylebook/addon';

export const globalTypes = {
  stylebook: {
    mode: 'single',
    theme: PurpleRain,
    logo: {
      src: 'https://placehold.it/350x150',
      title: 'stylebook',
      url: '/',
    },
    splash: {
      src: 'https://placehold.it/350x150',
      width: 200,
    },
  },
};

addDecorator(withStyleBook);
```

---

## 🤓 License

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
