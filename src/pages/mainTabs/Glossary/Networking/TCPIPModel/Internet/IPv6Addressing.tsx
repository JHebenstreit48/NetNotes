import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const IPv6Addressing = () => {
  const markdownFilePath = 'Glossary/Networking/TCPIPModel/Internet/IPv6Addressing';

  return (
    <>
      <PageLayout>
        <PageTitle title="Glossary - Internet Layer - IPv6 Addressing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IPv6Addressing;