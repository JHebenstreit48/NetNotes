import PageLayout from '@/components/navigationUI/pageLayout';
import PageTile from '@/components/pageComponents/pageTitle'
import Notes from '@/components/pageComponents/notes/notes';

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