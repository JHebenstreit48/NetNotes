import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LayerComparison = () => {
  const markdownFilePath =
    '/CoreConcepts/Basics/OSIModel/Overview/LayerComparison';

  return (
    <>
      <PageLayout>
        <Header text="Layer Comparison" />
        <Notes
          filePath={markdownFilePath}
        />
      </PageLayout>
    </>
  );
};

export default LayerComparison;