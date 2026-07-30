import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const Basics = () => {
  const markdownFilePath = 'Glossary/Networking/TCPIPModel/Internet/Basics';

  return (
    <>
      <PageLayout>
        <PageTitle title="Glossary - Internet Layer - Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Basics;