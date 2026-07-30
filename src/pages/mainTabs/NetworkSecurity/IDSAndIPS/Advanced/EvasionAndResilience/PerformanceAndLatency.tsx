import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
