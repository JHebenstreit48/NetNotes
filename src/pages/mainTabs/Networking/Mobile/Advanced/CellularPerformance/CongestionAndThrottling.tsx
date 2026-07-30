import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
