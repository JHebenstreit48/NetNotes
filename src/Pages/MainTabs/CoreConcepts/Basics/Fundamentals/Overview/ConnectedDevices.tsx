import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ConnectedDevices = () => {
  const markdownFilePath = '/CoreConcepts/Basics/Fundamentals/Overview/ConnectedDevices';

  return (
    <>
      <PageLayout>
        <Header text="Connected Devices" size="sm" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ConnectedDevices;