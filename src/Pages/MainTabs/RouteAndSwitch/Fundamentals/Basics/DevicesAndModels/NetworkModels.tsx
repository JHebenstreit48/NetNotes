import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import Notes from '@/Components/PageComponents/Notes/Notes';

const NetworkModels = () => {
  const markdownFilePath = '/CoreConcepts/Basics/Fundamentals/DevicesAndModels/NetworkModels';

  return (
    <>
      <PageLayout>
        <Header text="Networking Models" size="md" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NetworkModels;
