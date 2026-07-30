import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const TunnelsAndSplitTunnel = () => {
  const markdownFilePath = 'Networking/Cloud/Advanced/Architecture/TunnelsAndSplitTunnel';

  return (
    <>
      <PageLayout>
        <PageTitle title="Tunnels & Split-Tunnel" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TunnelsAndSplitTunnel;
