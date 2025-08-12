import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Glossary = () => {
  const markdownFilePath =
    '/CoreConcepts/Basics/OSIModel/Overview/Glossary';

  return (
    <>
      <PageLayout>
        <Header text="Glossary" />
        <Notes
          filePath={markdownFilePath}
        />
      </PageLayout>
    </>
  );
};

export default Glossary;