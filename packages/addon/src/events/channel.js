import { STORY_RENDERED } from '@storybook/core-events';
import manageGlobals from './emotion';

const listenChannel = (channel) => {
  channel.once(STORY_RENDERED, () => manageGlobals());
};

export default listenChannel;
