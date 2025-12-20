import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const NetworkAccess = () => {
  const markdownFilePath = 'NetworkSecurity/AccessControl/Basics/AccessContexts/NetworkAccess';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Network Access (802.1X overview)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NetworkAccess;
