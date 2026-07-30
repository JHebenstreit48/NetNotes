import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const SyncAndRecovery = () => {
  const markdownFilePath = 'Networking/Legacy/OSIModel/Basics/Session/SyncAndRecovery';

  return (
    <>
      <PageLayout>
        <PageTitle title="Sync & Recovery" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SyncAndRecovery;
