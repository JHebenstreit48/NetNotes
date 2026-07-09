import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TrustBoundaries = () => {
  const markdownFilePath = 'Networking/Switching/Advanced/QoS/TrustBoundaries';

  return (
    <>
      <PageLayout>
        <PageTitle title="Trust Boundaries" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TrustBoundaries;