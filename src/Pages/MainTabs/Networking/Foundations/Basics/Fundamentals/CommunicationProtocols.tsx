import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CommunicationProtocols = () => {
  const markdownFilePath = 'Networking/Foundations/Basics/Fundamentals/CommunicationProtocols';

  return (
    <>
      <PageLayout>
        <PageTitle title="Fundamentals - Communication Protocols" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CommunicationProtocols;