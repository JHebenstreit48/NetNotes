import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CAPWAPJoinAndTunnel = () => {
  const markdownFilePath = 'Networking/Wireless/Advanced/ControllerOps/CAPWAPJoinAndTunnel';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="CAPWAP Join & Tunnel" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CAPWAPJoinAndTunnel;
