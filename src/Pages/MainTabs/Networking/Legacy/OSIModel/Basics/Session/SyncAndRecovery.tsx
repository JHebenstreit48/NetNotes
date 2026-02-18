import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SyncAndRecovery = () => {
  const markdownFilePath = 'Networking/Legacy/OSIModel/Basics/Session/SyncAndRecovery';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Sync & Recovery" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SyncAndRecovery;
