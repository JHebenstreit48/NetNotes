import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTile from '@/Components/PageComponents/PageTitle'
import Notes from '@/Components/PageComponents/Notes/Notes';

const NetworkDevices = () => {
  const markdownFilePath = 'Networking/Foundations/Basics/DevicesAndModels/Fundamentals/NetworkDevices';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTile title="Fundamentals - Networking Devices" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NetworkDevices;