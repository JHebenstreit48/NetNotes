import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FirmwareAndStaging = () => {
  const markdownFilePath =
    'Networking/Cloud/Basics/ChangeOps/FirmwareAndStaging';

  return (
    <>
      <PageLayout>
        <PageTitle title="Cloud - Firmware & Staging" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FirmwareAndStaging;