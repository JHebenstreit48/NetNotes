import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RollbackAndAudit = () => {
  const markdownFilePath =
    'Networking/Cloud/Basics/ChangeOps/RollbackAndAudit';

  return (
    <>
      <PageLayout>
        <PageTitle title="Cloud - Rollback & Audit" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RollbackAndAudit;