import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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