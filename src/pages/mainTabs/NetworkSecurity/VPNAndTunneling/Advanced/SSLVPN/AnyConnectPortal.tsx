import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
