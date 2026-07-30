import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Glossary = () => {
  const markdownFilePath = 'Networking/Legacy/OSIModel/Basics/GlossaryResources/Glossary';

  return (
    <>
      <PageLayout>
        <PageTitle title="Glossary" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Glossary;
