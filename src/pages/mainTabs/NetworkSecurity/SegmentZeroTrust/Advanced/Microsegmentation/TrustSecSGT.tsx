import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
