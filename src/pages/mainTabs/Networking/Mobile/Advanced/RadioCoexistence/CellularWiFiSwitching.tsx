import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CellularWiFiSwitching = () => {
  const markdownFilePath = 'Networking/Mobile/Advanced/RadioCoexistence/CellularWiFiSwitching';

  return (
    <>
      <PageLayout>
        <PageTitle title="Cellular + Wi-Fi Switching" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CellularWiFiSwitching;
