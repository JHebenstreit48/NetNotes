import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IPSourceGuard = () => {
  const markdownFilePath = 'NetworkSecurity/NetworkControls/Advanced/SourceValidation/IPSourceGuard';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="IP Source Guard" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IPSourceGuard;
