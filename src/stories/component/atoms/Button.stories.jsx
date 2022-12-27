import React from 'react';

import { Button } from 'codeblynk-ui-library';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: { flat: { control: 'boolean' }},
  args:{
    flat:false
  }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} >Hello</Button>;

export const Primary = Template.bind({});

