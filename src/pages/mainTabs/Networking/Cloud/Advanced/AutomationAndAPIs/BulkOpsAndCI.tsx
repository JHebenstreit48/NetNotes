import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
