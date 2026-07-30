import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Introduction = () => {
  const markdownFilePath = 'Networking/Legacy/ProtocolsAndStatuses/Basics/TFTP/Introduction';

  return (
    <>
      <PageLayout>
        <PageTitle title="Legacy - Protocols & Statuses - TFTP - Introduction" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Introduction;