import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
