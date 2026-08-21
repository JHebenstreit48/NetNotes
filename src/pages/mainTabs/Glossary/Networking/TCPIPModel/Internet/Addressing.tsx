import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Addressing = () => {
  const markdownFilePath = 'Glossary/Networking/TCPIPModel/Internet/Addressing';

  return (
    <>
      <PageLayout>
        <PageTitle title="Glossary - Internet Layer - Addressing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Addressing;