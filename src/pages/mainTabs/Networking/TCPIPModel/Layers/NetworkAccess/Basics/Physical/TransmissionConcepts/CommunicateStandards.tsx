import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CommStandards = () => {
  const markdownFilePath =
    'Networking/TCPIPModel/Layers/NetworkAccess/Basics/Physical/TransmissionConcepts/CommunicationStandards';

  return (
    <>
      <PageLayout>
        <PageTitle title="Network Access - Physical - Communication Standards" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CommStandards;