import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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