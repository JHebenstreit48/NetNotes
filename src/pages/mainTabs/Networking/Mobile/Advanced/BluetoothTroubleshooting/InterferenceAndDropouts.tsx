import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
