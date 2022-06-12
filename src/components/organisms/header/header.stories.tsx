import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import Header from '.';

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export default {
  title: 'organisms/Header',
  component: Header,
  decorators: [
    (story) => (
      <QueryClientProvider client={mockedQueryClient}>
        {story()}
      </QueryClientProvider>
    ),
  ],
  argTypes: {},
} as ComponentMeta<typeof Header>;

export const Template: ComponentStory<typeof Header> = (args) => (
  <Header {...args} />
);

const Default = Template.bind({});
Default.args = {};
