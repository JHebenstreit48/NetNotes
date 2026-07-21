import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const CAPWAPJoinAndTunnel = () => {
  const markdownFilePath = 'Networking/Wireless/Advanced/ControllerOps/CAPWAPJoinAndTunnel';

  return (
    <>
      <PageLayout>
        <PageTitle title="CAPWAP Join & Tunnel" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CAPWAPJoinAndTunnel;
