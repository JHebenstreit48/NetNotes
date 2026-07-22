import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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