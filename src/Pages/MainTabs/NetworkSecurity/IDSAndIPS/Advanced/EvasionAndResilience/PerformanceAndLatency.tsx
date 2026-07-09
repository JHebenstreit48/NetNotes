import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PerformanceAndLatency = () => {
  const markdownFilePath = 'NetworkSecurity/IDSAndIPS/Advanced/EvasionAndResilience/PerformanceAndLatency';

  return (
    <>
      <PageLayout>
        <PageTitle title="Performance & Latency" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PerformanceAndLatency;
