import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Characteristics = () => {
  const markdownFilePath = '/CoreConcepts/Basics/OSIModel/Fundamentals/ModelCharacteristics';

  return (
    <>
      <PageLayout>
        <Header text="Characteristics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Characteristics;
