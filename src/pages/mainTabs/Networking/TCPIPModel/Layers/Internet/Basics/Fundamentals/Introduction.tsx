import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Introduction = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Internet/Basics/Fundamentals/Introduction';

  return (
    <>
      <PageLayout>
        <PageTitle title="TCP/IP Model - Internet Layer - Fundamentals - Introduction" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Introduction;