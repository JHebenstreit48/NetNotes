import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CongestionAndThrottling = () => {
  const markdownFilePath = 'Networking/Mobile/Advanced/CellularPerformance/CongestionAndThrottling';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Congestion & Throttling" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CongestionAndThrottling;
