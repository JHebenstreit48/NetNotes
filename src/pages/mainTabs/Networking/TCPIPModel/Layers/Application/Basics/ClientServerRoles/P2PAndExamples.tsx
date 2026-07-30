import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const P2PAndExamples = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Application/Basics/ClientAndServerRoles/P2PAndExamples';

  return (
    <>
      <PageLayout>
        <PageTitle title="Client & Server Roles - P2P and Examples" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default P2PAndExamples;