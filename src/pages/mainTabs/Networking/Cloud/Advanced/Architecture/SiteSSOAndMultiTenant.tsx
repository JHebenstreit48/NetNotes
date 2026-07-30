import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SiteSSOAndMultiTenant = () => {
  const markdownFilePath = 'Networking/Cloud/Advanced/Architecture/SiteSSOAndMultiTenant';

  return (
    <>
      <PageLayout>
        <PageTitle title="Site/SSO & Multi-Tenant" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SiteSSOAndMultiTenant;
