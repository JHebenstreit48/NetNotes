import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const BandSteeringAndLoadBalance = () => {
  const markdownFilePath = 'Networking/Wireless/Advanced/RFAndPerformance/BandSteeringAndLoadBalance';

  return (
    <>
      <PageLayout>
        <PageTitle title="Band Steering & Load Balance" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BandSteeringAndLoadBalance;
