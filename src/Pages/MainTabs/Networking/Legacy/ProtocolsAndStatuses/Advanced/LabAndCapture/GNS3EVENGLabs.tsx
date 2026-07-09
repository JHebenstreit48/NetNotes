import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GNS3EVENGLabs = () => {
  const markdownFilePath = 'Networking/Legacy/ProtocolsAndStatuses/Advanced/LabAndCapture/GNS3EVENGLabs';

  return (
    <>
      <PageLayout>
        <PageTitle title="GNS3/EVE-NG Labs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GNS3EVENGLabs;
