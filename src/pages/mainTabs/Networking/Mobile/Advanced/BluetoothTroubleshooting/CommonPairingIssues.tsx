import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
