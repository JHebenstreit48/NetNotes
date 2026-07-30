import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const RTPAndJitterAnalysis = () => {
  const markdownFilePath = 'VoIP/Diagnostics/Advanced/MediaQuality/RTPAndJitterAnalysis';

  return (
    <>
      <PageLayout>
        <PageTitle title="RTP & Jitter Analysis" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RTPAndJitterAnalysis;
