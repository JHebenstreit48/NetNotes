import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const InterferenceAndDropouts = () => {
  const markdownFilePath = 'Networking/Mobile/Advanced/BluetoothTroubleshooting/InterferenceAndDropouts';

  return (
    <>
      <PageLayout>
        <PageTitle title="Interference & Dropouts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InterferenceAndDropouts;
