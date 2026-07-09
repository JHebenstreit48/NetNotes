import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Introduction = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Application/Basics/WebAndName/Introduction';

  return (
    <>
      <PageLayout>
        <PageTitle title="TCP/IP Model - Application Layer -Introduction" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Introduction;