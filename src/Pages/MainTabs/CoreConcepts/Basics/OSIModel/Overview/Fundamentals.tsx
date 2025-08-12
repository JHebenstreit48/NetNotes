import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Fundamentals = () => {
  const markdownFilePath =
    '/CoreConcepts/Basics/OSIModel/Overview/Fundamentals';

  return (
    <>
      <PageLayout>
        <Header text="Fundamentals" />
        <Notes
          filePath={markdownFilePath}
        />
      </PageLayout>
    </>
  );
};

export default Fundamentals;