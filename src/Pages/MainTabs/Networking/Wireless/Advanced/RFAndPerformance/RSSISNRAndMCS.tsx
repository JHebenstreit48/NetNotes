import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
