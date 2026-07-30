import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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