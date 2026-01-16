import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RSSISNRAndMCS = () => {
  const markdownFilePath = 'RouteAndSwitch/Wireless/Advanced/RFAndPerformance/RSSISNRAndMCS';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="RSSI/SNR & MCS" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RSSISNRAndMCS;
