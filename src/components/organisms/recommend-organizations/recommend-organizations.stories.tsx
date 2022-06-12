import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import RecommendOrganizations from '.';

const mockedQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export default {
  title: 'organisms/RecommendOrganizations',
  component: RecommendOrganizations,
  decorators: [
    (story) => (
      <QueryClientProvider client={mockedQueryClient}>
        {story()}
      </QueryClientProvider>
    ),
  ],
  argTypes: {},
} as ComponentMeta<typeof RecommendOrganizations>;

export const Template: ComponentStory<typeof RecommendOrganizations> = (
  args
) => <RecommendOrganizations {...args} />;

const Default = Template.bind({});
Default.args = {};
