import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
