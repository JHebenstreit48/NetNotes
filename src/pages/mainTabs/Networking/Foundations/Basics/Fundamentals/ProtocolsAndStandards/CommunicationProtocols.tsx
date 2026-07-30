import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CommunicationProtocols = () => {
  const markdownFilePath = 'Networking/Foundations/Basics/Fundamentals/ProtocolsAndStandards/CommunicationProtocols';

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