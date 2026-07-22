import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
