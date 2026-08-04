import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Protocols = () => {
  const markdownFilePath = 'Glossary/Networking/Switching/Protocols';

  return (
    <>
      <PageLayout>
        <PageTitle title="Switching - Protocols" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Protocols;