import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TLSAndSRTPAtAHighLevel = () => {
  const markdownFilePath = 'VoIP/Foundations/Advanced/SecurityOverview/TLSAndSRTPAtAHighLevel';

  return (
    <>
      <PageLayout>
        <PageTitle title="TLS and SRTP at a High Level" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TLSAndSRTPAtAHighLevel;
