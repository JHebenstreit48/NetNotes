import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LocalRemoteServer = () => {
  const markdownFilePath = 'Tools/GNS3/Advanced/ServersAndPerformance/LocalRemoteServer';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Local/Remote Server" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LocalRemoteServer;
