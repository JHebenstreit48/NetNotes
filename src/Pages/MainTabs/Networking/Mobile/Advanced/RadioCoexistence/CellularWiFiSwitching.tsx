import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
