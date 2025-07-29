import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Introduction = () => {
  const markdownFilePath =
    '/CoreConcepts/TCPIPModel/Layers/NetworkAccess/Layer2-DataLink/CoreConcepts/Introduction';

  return (
    <>
      <PageLayout>
        <Header text="Introduction" />
        <Notes
          filePath={markdownFilePath}
        />
      </PageLayout>
    </>
  );
};

export default Introduction;
