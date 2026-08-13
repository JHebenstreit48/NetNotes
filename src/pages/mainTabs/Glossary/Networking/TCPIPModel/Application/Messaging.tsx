import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Messaging = () => {
  const markdownFilePath = 'Glossary/Networking/TCPIPModel/Application/Messaging';

  return (
    <>
      <PageLayout>
        <PageTitle title="Glossary - Application Layer - Messaging" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Messaging;