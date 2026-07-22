import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
