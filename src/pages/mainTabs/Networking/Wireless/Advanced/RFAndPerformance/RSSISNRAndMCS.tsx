import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
