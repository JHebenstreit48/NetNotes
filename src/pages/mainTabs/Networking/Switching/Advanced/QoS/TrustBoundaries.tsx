import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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