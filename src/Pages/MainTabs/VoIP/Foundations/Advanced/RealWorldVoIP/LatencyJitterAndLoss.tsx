import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LatencyJitterAndLoss = () => {
  const markdownFilePath = 'VoIP/Foundations/Advanced/RealWorldVoIP/LatencyJitterAndLoss';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Latency, Jitter, and Loss" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LatencyJitterAndLoss;
