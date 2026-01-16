import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BandSteeringAndLoadBalance = () => {
  const markdownFilePath = 'RouteAndSwitch/Wireless/Advanced/RFAndPerformance/BandSteeringAndLoadBalance';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Band Steering & Load Balance" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BandSteeringAndLoadBalance;
