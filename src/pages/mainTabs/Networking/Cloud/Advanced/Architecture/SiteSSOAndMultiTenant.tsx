import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
