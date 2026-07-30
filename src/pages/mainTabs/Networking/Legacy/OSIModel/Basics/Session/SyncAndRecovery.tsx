import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
