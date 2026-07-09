import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
