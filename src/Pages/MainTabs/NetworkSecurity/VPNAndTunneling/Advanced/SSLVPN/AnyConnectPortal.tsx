import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AnyConnectPortal = () => {
  const markdownFilePath = 'NetworkSecurity/VPNAndTunneling/Advanced/SSLVPN/AnyConnectPortal';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="AnyConnect / Portal" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AnyConnectPortal;
