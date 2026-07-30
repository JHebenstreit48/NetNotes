import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const LatencyJitterAndLoss = () => {
  const markdownFilePath = 'VoIP/Foundations/Advanced/RealWorldVoIP/LatencyJitterAndLoss';

  return (
    <>
      <PageLayout>
        <PageTitle title="Latency, Jitter, and Loss" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LatencyJitterAndLoss;