import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
