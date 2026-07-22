import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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