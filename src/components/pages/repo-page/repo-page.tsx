import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import useReadme from '@src/utils/hooks/use-readme';
import useRepo from '@src/utils/hooks/use-repo';

import Box from '@src/components/atoms/box';
import Loading from '@src/components/atoms/loading';
import CardError from '@src/components/molecules/card-error';
import RepoProfile, {
  RepoProfileSkeleton,
} from '@src/components/molecules/repo-profile';

import * as S from './styles';

const DynamicReadme = dynamic(
  () => import('@src/components/molecules/readme'),
  {
    ssr: false,
    loading: () => (
      <Box>
        <Loading />
      </Box>
    ),
  }
);

export interface RepoPageProps {
  className?: string;
  isInModal?: boolean;
  repoName?: string;
}

export const RepoPage = ({
  className,
  isInModal,
  repoName: repoNameFromProps,
}: RepoPageProps) => {
  const router = useRouter();
  const { org, repo: repoFromParams } = router.query;
  const repo = isInModal ? repoNameFromProps : repoFromParams;

  const {
    status: fetchRepoStatus,
    data: repoData,
    error: fetchRepoError,
  } = useRepo({ org: org as string, repoName: repo as string });

  const { data: readmeData } = useReadme(
    {
      org: org as string,
      repoName: repo as string,
      defaultBarnch: repoData?.default_branch || '',
    },
    { enabled: !!repoData?.default_branch }
  );

  return (
    <S.Container className={className}>
      {repoData ? (
        <>
          <RepoProfile
            org={(org as string) || ''}
            repo={(repo as string) || ''}
            description={repoData.description}
            githubUrl={repoData.html_url}
            language={repoData.language}
            stars={repoData.stargazers_count}
            updatedAt={repoData.updated_at}
            topics={repoData.topics}
            isInModal={isInModal}
          />
          {readmeData && <DynamicReadme content={readmeData} />}
        </>
      ) : (
        <>
          {fetchRepoStatus === 'loading' && <RepoProfileSkeleton />}
          {fetchRepoStatus === 'error' && (
            <CardError
              type={
                fetchRepoError?.message === 'Not Found' ? 'notFound' : 'error'
              }
              message={
                fetchRepoError?.message === 'Not Found'
                  ? `'${org}/${repo}' not found.`
                  : fetchRepoError?.message || ''
              }
            />
          )}
        </>
      )}
    </S.Container>
  );
};
