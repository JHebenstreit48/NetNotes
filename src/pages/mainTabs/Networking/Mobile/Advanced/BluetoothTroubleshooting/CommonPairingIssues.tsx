import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CommonPairingIssues = () => {
  const markdownFilePath = 'Networking/Mobile/Advanced/BluetoothTroubleshooting/CommonPairingIssues';

  return (
    <>
      <PageLayout>
        <PageTitle title="Common Pairing Issues" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CommonPairingIssues;
