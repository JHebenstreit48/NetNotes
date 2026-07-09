import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
