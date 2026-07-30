import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CloudNATBridging = () => {
  const markdownFilePath = 'Tools/GNS3/Advanced/Connectivity/CloudNATBridging';

  return (
    <>
      <PageLayout>
        <PageTitle title="Cloud/NAT/Bridging" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CloudNATBridging;
