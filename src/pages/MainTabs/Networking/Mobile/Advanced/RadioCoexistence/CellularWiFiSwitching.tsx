import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
