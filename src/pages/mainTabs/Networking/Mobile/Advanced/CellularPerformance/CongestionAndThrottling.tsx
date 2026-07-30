import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
