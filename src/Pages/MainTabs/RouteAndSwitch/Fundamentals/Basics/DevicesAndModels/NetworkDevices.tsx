import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import Notes from '@/Components/PageComponents/Notes/Notes';

const NetworkDevices = () => {
  const markdownFilePath = '/CoreConcepts/Basics/Fundamentals/DevicesAndModels/NetworkDevices';

  return (
    <>
      <PageLayout>
        <Header text="Networking Devices" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NetworkDevices;
