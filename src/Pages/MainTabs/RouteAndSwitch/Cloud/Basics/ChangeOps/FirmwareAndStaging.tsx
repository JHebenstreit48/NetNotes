import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FirmwareAndStaging = () => {
  const markdownFilePath =
    'RouteAndSwitch/Cloud/Basics/ChangeOps/FirmwareAndStaging';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Cloud - Firmware & Staging" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FirmwareAndStaging;