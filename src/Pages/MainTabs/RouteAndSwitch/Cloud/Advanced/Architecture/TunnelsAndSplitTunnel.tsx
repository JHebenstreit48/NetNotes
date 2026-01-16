import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TunnelsAndSplitTunnel = () => {
  const markdownFilePath = 'RouteAndSwitch/Cloud/Advanced/Architecture/TunnelsAndSplitTunnel';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Tunnels & Split-Tunnel" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TunnelsAndSplitTunnel;
