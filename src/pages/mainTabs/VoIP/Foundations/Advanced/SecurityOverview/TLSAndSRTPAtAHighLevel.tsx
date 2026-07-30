import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
