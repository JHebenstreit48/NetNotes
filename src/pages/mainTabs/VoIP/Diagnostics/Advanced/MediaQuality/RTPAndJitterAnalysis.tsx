import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
