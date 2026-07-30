import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
