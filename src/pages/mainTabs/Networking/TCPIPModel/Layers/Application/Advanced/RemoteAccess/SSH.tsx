import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const SSH = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Application/Advanced/RemoteAccess/SSH';

  return (
    <>
      <PageLayout>
        <PageTitle title="SSH" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SSH;
