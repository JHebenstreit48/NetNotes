import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RTPAndJitterAnalysis = () => {
  const markdownFilePath = 'VoIP/Diagnostics/Advanced/MediaQuality/RTPAndJitterAnalysis';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="RTP & Jitter Analysis" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RTPAndJitterAnalysis;
