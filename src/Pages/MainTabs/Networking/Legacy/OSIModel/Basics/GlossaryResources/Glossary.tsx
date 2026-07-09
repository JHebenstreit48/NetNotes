import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
