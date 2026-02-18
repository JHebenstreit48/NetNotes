import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SiteSSOAndMultiTenant = () => {
  const markdownFilePath = 'Networking/Cloud/Advanced/Architecture/SiteSSOAndMultiTenant';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Site/SSO & Multi-Tenant" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SiteSSOAndMultiTenant;
