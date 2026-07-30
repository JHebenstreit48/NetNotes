import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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