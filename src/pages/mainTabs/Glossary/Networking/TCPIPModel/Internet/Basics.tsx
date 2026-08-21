import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Basics = () => {
  const markdownFilePath = 'Glossary/Networking/TCPIPModel/Internet/Basics';

  return (
    <>
      <PageLayout>
        <PageTitle title="Glossary - TCP/IP Model - Internet - Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Basics;