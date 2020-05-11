![License](https://img.shields.io/github/license/stylebooks/stylebook.svg?style=flat-square&color=9cf)
![Last commit](https://img.shields.io/github/last-commit/stylebooks/stylebook.svg?style=flat-square&color=blueviolet)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square&color=ff69b4)](http://commitizen.github.io/cz-cli)

## Motivations

Stylebook is a [Storybook](https://storybook.js.org/) addon.
Stylebook adds endless possibilities and all kind of UI customizations, making [Storybook](https://storybook.js.org/) more dinamyc as style-guides use-cases, for instance.

> Before we begin, we need to learn a bit about how Storybook works.

Basically, Storybook has a Manager App and a Preview Area.
Manager App is the client side UI for Storybook. Preview Area is the place where the story is rendered. Usually the Preview Area is an iframe.

With that being said, Storybook doesn't have many options for customizing the Manager app (other than manager_head.html), such as putting a custom company logo or styling the search input as wish, as well the list-items for stories itself.
<br /><br />
Stylebooks allows you using a [React component](https://reactjs.org/docs/react-component.html) as the manager app and customizing it as you wish.<br />
Since this is a early-stage addon project, Stylebook only supoorts [React](https://reactjs.org/) for now, We hope to add support for other frameworks soon.

## Getting started

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributors](#contributors)
- [License](#license)

## Installation

First of all, you need to install Stylebook into your project as a dev dependency.

```sh
yarn add -D @stylebook/core
```

Then, register it as an addon by adding it to your `addons.js` file (located in the .storybook directory).

```js
import '@stylebook/core/register';
```

## Configuration

Import and add the decorator `withManager` to your `config.js` file (located in the .storybook directory as well).
You' ll need to import the StoriesProvider component too, this is the wrapper components for a custom manager, it'll provide the stories array for you.

```js
import { withManager } from '@stylebook/core/decorators';
import { StoriesProvider } from '@stylebook/core/components';
```

## Usage

You are almost ready to go: with the addon imports now you can create your own manager component wrapped by `StoriesProvider` that will provide the stories for you! The sky is the limit!

```js
// load stories
const req = require.context('../stories', true, /\.stories\.jsx$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

// create a new custom manager
// you can use your own react component or icons - whatever you like!
const newManager = (
  <StoriesProvider>
    {(stories) => (
      <ul>
        {stories.map((story) => (
          <li key={story.kind}>
            <span>{story.kind}</span>
            <ul>
              {story.stories.map((substory) => (
                <li key={substory.name}>
                  <button onClick={linkTo(story.kind, substory.name)}>
                    {substory.name}
                  </button>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    )}
  </StoriesProvider>
);

const options = {
  component: newManager,
};

// pass the new manager for stylebook addon
addDecorator(withManager(options));
// finish storybook configuration
configure(loadStories, module);
```

## Contributors

<table><tr><td align="center"><a href="#"><img src="https://avatars1.githubusercontent.com/u/4368481?s=460&v=4" width="100px;" alt="Alan Oliveira"/><br /><sub><b>Alan Oliveira</b></sub></a><br /><a href="https://github.com/stylebooks/stylebook/commits?author=alan-oliv" title="Documentation">📖</a> <a href="https://github.com/stylebooks/stylebook/commits?author=alan-oliv" title="Code">💻</a> <a href="#ideas-alan-oliv" title="Ideas, Planning, & Feedback">🤔</a> <a href="#review-alan-oliv" title="Reviewed Pull Requests">👀</a></td></tr></table>

---

## License

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
