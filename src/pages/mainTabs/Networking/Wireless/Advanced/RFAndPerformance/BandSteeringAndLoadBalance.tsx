import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
