import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const Introduction = () => {
  const markdownFilePath = 'Networking/Legacy/ProtocolsAndStatuses/Basics/POP3/Introduction';

  return (
    <>
      <PageLayout>
        <PageTitle title="Legacy - Protocols & Statuses - POP3 - Introduction" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Introduction;