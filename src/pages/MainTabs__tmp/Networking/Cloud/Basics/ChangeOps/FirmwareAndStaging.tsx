import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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