import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import OrganizationPage from '@src/components/pages/organization-page';

const OrgPage: NextPage = ({}) => {
  const router = useRouter();
  const { org } = router.query;

  return (
    <>
      <Head>
        <title>Github Repo | {org}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <OrganizationPage />
    </>
  );
};

export default OrgPage;
