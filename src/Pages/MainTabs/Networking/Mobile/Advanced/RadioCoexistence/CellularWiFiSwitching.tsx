import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CellularWiFiSwitching = () => {
  const markdownFilePath = 'Networking/Mobile/Advanced/RadioCoexistence/CellularWiFiSwitching';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Cellular + Wi-Fi Switching" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CellularWiFiSwitching;
