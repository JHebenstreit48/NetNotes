import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
