import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const AnyConnectPortal = () => {
  const markdownFilePath = 'NetworkSecurity/VPNAndTunneling/Advanced/SSLVPN/AnyConnectPortal';

  return (
    <>
      <PageLayout>
        <PageTitle title="AnyConnect / Portal" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AnyConnectPortal;
