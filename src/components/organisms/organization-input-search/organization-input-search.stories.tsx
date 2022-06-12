import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import OrganizationInputSearch from '.';

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export default {
  title: 'organisms/OrganizationInputSearch',
  component: OrganizationInputSearch,
  decorators: [
    (story) => (
      <QueryClientProvider client={mockedQueryClient}>
        {story()}
      </QueryClientProvider>
    ),
  ],
  argTypes: {},
} as ComponentMeta<typeof OrganizationInputSearch>;

const Template: ComponentStory<typeof OrganizationInputSearch> = (args) => (
  <OrganizationInputSearch {...args} />
);

export const Default = Template.bind({});
Default.args = {};
