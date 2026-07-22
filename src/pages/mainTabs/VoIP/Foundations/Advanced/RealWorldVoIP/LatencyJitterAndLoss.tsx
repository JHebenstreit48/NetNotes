import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
