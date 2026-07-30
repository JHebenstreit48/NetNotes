import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
