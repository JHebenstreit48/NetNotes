import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const LocalRemoteServer = () => {
  const markdownFilePath = 'Tools/GNS3/Advanced/ServersAndPerformance/LocalRemoteServer';

  return (
    <>
      <PageLayout>
        <PageTitle title="Local/Remote Server" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LocalRemoteServer;
