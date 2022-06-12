import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import ReposFilters from '.';

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export default {
  title: 'organisms/ReposFilters',
  component: ReposFilters,
  decorators: [
    (story) => (
      <QueryClientProvider client={mockedQueryClient}>
        {story()}
      </QueryClientProvider>
    ),
  ],
  argTypes: {},
} as ComponentMeta<typeof ReposFilters>;

export const Template: ComponentStory<typeof ReposFilters> = (args) => (
  <ReposFilters {...args} />
);

const Default = Template.bind({});
Default.args = {};
