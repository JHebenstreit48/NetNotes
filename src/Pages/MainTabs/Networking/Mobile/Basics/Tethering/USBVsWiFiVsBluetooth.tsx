import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const USBVsWiFiVsBluetooth = () => {
  const markdownFilePath = 'Networking/Mobile/Basics/Tethering/USBVsWiFiVsBluetooth';

  return (
    <>
      <PageLayout>
        <PageTitle title="USB vs Wi-Fi vs Bluetooth" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default USBVsWiFiVsBluetooth;
