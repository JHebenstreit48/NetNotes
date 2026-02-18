import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WiFiBluetoothInteraction = () => {
  const markdownFilePath = 'Networking/Mobile/Advanced/RadioCoexistence/WiFiBluetoothInteraction';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Wi-Fi + Bluetooth Interaction" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WiFiBluetoothInteraction;
