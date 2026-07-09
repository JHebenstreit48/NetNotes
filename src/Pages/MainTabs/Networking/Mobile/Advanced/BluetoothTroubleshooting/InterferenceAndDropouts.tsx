import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
