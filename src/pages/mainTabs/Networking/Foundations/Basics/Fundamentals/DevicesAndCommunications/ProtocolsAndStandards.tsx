import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ProtocolsAndStandards = () => {
  const markdownFilePath = 'Networking/Foundations/Basics/Fundamentals/DevicesAndCommunications/ProtocolsAndStandards';

  return (
    <>
      <PageLayout>
        <PageTitle title="Fundamentals - Protocols & Standards" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProtocolsAndStandards;