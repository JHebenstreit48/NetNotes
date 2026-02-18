import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CommonPairingIssues = () => {
  const markdownFilePath = 'Networking/Mobile/Advanced/BluetoothTroubleshooting/CommonPairingIssues';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Common Pairing Issues" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CommonPairingIssues;
