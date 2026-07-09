import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RSSISNRAndMCS = () => {
  const markdownFilePath = 'Networking/Wireless/Advanced/RFAndPerformance/RSSISNRAndMCS';

  return (
    <>
      <PageLayout>
        <PageTitle title="RSSI/SNR & MCS" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RSSISNRAndMCS;
