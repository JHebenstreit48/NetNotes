import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
