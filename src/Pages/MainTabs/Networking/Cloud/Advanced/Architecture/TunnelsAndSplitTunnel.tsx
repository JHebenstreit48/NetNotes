import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
