import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
