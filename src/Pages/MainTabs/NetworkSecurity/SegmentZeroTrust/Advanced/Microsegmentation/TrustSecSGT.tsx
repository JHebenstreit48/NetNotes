import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TrustSecSGT = () => {
  const markdownFilePath = 'NetworkSecurity/SegmentZeroTrust/Advanced/Microsegmentation/TrustSecSGT';

  return (
    <>
      <PageLayout>
        <PageTitle title="TrustSec / SGT" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TrustSecSGT;
