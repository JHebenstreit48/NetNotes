import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
