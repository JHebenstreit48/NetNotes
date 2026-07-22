import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const WiFiBluetoothInteraction = () => {
  const markdownFilePath = 'Networking/Mobile/Advanced/RadioCoexistence/WiFiBluetoothInteraction';

  return (
    <>
      <PageLayout>
        <PageTitle title="Wi-Fi + Bluetooth Interaction" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WiFiBluetoothInteraction;
