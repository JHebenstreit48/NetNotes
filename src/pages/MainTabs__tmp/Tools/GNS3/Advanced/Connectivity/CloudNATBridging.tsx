import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
