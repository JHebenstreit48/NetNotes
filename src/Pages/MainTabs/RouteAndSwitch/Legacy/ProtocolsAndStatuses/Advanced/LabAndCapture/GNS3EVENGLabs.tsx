import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GNS3EVENGLabs = () => {
  const markdownFilePath = 'RouteAndSwitch/Legacy/ProtocolsAndStatuses/Advanced/LabAndCapture/GNS3EVENGLabs';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="GNS3/EVE-NG Labs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GNS3EVENGLabs;
