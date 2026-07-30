import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
