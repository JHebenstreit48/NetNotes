import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const History = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Basics/History';

  return (
    <>
      <PageLayout>
        <PageTitle title="TCP/IP Model - Basics - Introduction" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default History;