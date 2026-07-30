import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const IPv4Addressing = () => {
  const markdownFilePath = 'Glossary/Networking/TCPIPModel/Internet/IPv4Addressing';

  return (
    <>
      <PageLayout>
        <PageTitle title="Glossary - Internet Layer - IPv4 Addressing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IPv4Addressing;