import PageLayout from '@/components/navigationUI/pageLayout';
import PageTile from '@/components/pageComponents/pageTitle'
import Notes from '@/components/pageComponents/notes/notes';

const NetworkDevices = () => {
  const markdownFilePath = 'Networking/Foundations/Basics/DevicesAndModels/Fundamentals/NetworkDevices';

  return (
    <>
      <PageLayout>
        <PageTile title="Fundamentals - Networking Devices" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NetworkDevices;