import { STORY_RENDERED } from '@storybook/core-events';
import { handleGlobalStyle, renderSplash } from '.';

const subscribe = (channel) => {
  renderSplash();
  channel.once(STORY_RENDERED, () => handleGlobalStyle());
};

export default subscribe;
