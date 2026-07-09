import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CongestionAndThrottling = () => {
  const markdownFilePath = 'Networking/Mobile/Advanced/CellularPerformance/CongestionAndThrottling';

  return (
    <>
      <PageLayout>
        <PageTitle title="Congestion & Throttling" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CongestionAndThrottling;
