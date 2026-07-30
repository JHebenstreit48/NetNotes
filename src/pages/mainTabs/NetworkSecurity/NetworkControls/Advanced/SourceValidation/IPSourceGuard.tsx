import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const IPSourceGuard = () => {
  const markdownFilePath = 'NetworkSecurity/NetworkControls/Advanced/SourceValidation/IPSourceGuard';

  return (
    <>
      <PageLayout>
        <PageTitle title="IP Source Guard" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IPSourceGuard;
