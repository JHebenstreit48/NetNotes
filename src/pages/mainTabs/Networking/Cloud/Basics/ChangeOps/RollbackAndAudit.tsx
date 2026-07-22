import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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