import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AddressingAndRouting = () => {
  const markdownFilePath = '/CoreConcepts/Basics/OSIModel/Layers/Network/AddressingAndRouting';

  return (
    <>
      <PageLayout>
        <Header text="Addressing/Routing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AddressingAndRouting;