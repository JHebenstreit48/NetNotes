import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
