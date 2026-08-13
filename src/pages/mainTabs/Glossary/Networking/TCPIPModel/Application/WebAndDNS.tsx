import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const WebAndDNS = () => {
  const markdownFilePath = 'Glossary/Networking/TCPIPModel/Application/WebAndDNS';

  return (
    <>
      <PageLayout>
        <PageTitle title="Glossary - Application Layer - Web & DNS" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WebAndDNS;