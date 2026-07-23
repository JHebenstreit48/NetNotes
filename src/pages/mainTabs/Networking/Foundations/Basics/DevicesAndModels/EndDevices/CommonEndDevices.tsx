import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTile from '@/components/PageComponents/PageTitle'
import Notes from '@/components/PageComponents/Notes/Notes';

const CommonEndDevices = () => {
  const markdownFilePath = 'Networking/Foundations/Basics/DevicesAndModels/EndDevices/CommonEndDevices';

  return (
    <>
      <PageLayout>
        <PageTile title="Devices & Models - End Devices - Common End Devices" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CommonEndDevices;