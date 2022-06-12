import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import ReposContainer from '.';

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export default {
  title: 'organisms/ReposContainer',
  component: ReposContainer,
  decorators: [
    (story) => (
      <QueryClientProvider client={mockedQueryClient}>
        {story()}
      </QueryClientProvider>
    ),
  ],
  argTypes: {},
} as ComponentMeta<typeof ReposContainer>;

export const Template: ComponentStory<typeof ReposContainer> = (args) => (
  <ReposContainer {...args} />
);

const Default = Template.bind({});
Default.args = {};
