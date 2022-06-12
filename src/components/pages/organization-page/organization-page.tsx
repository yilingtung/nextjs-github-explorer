import { useState } from 'react';
import { useRouter } from 'next/router';

import useElementOnScreen from '@src/utils/hooks/use-element-on-screen';
import useOrganization from '@src/utils/hooks/use-organization';
import useMediaQuery from '@src/utils/hooks/use-media-query';
import { device } from '@src/utils/media';

import ScrollTopButton from '@src/components/atoms/scroll-top-button';
import CardError from '@src/components/molecules/card-error';
import OrgProfile, {
  OrgProfileSkeleton,
} from '@src/components/molecules/org-profile';
import ReposContainer from '@src/components/organisms/repos-container';
import ReposFilters from '@src/components/organisms/repos-filters';

import GridSvg from '@src/assets/icons/grid.svg';
import RowsSvg from '@src/assets/icons/rows.svg';

import * as S from './styles';

// const Modal = lazy(() => import('@src/components/atoms/modal'));
// const RepoPage = lazy(() => import('@src/components/pages/repo-page'));

const MainContent = () => {
  const [isGrid, setGrid] = useState(false);
  const isTablet = useMediaQuery(device.tablet);
  const [filterRef, isFilterVisible] = useElementOnScreen<HTMLDivElement>({
    rootMargin: '100px',
  });

  const handleToggleGrid = () => {
    setGrid((state) => !state);
  };

  return (
    <>
      <S.Main>
        <S.FiltersContainer>
          <ReposFilters ref={filterRef} />
          {!isTablet && (
            <S.DisplayButton onClick={handleToggleGrid}>
              {isGrid ? <GridSvg /> : <RowsSvg />}
            </S.DisplayButton>
          )}
        </S.FiltersContainer>
        <ReposContainer isGrid={isTablet ? false : isGrid} />
      </S.Main>
      {!isFilterVisible && <ScrollTopButton />}
    </>
  );
};

export interface OrganizationPageProps {
  className?: string;
}

export const OrganizationPage = ({ className }: OrganizationPageProps) => {
  const router = useRouter();
  const { org } = router.query;
  //   const location = useLocation();
  //   const navigate = useNavigate();

  const {
    status: fetchOrgStatus,
    data: orgData,
    error: fetchOrgError,
  } = useOrganization({ name: org as string });

  return (
    <S.Container className={className}>
      {fetchOrgStatus === 'error' ? (
        <CardError
          type={fetchOrgError.message === 'Not Found' ? 'notFound' : 'error'}
          message={
            fetchOrgError.message === 'Not Found'
              ? `'${org}' not found.`
              : fetchOrgError.message
          }
        />
      ) : (
        <>
          <S.Sidebar>
            <S.StickyProfile>
              {fetchOrgStatus === 'loading' || !orgData ? (
                <OrgProfileSkeleton />
              ) : (
                <OrgProfile
                  name={orgData.name}
                  description={orgData.description}
                  avtar={orgData.avatar_url}
                  githubUrl={orgData.html_url}
                  blogUrl={orgData.blog}
                />
              )}
            </S.StickyProfile>
          </S.Sidebar>
          <MainContent />
        </>
      )}
      {/* {(location?.state as { modal?: boolean })?.modal && (
        <Suspense>
          <Modal
            onDeactive={() => {
              navigate(-1);
            }}
          >
            <RepoPage isInModal repoName={location.pathname.split('/')[2]} />
          </Modal>
        </Suspense>
      )} */}
    </S.Container>
  );
};
