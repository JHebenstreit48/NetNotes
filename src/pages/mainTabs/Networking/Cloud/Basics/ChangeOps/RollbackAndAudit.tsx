import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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