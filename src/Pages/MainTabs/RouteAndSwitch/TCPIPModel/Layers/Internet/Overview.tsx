import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import Notes from '@/Components/PageComponents/Notes/Notes';

const InternetLayerOverview = () => {
  const markdownFilePath = '/InternetLayer/Overview';

  return (
    <>
      <PageLayout>
        <Header text="Internet Layer Overview" />
        <Notes
          filePath={markdownFilePath}
          markdownContent="markdownContent"
        />
      </PageLayout>
    </>
  );
};

export default InternetLayerOverview;
