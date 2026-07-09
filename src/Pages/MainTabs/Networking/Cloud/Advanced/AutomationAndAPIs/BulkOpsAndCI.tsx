import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BulkOpsAndCI = () => {
  const markdownFilePath = 'Networking/Cloud/Advanced/AutomationAndAPIs/BulkOpsAndCI';

  return (
    <>
      <PageLayout>
        <PageTitle title="Bulk Ops & CI" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BulkOpsAndCI;
