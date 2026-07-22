import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const NetworkAccess = () => {
  const markdownFilePath = 'NetworkSecurity/AccessControl/Basics/AccessContexts/NetworkAccess';

  return (
    <>
      <PageLayout>
        <PageTitle title="Network Access (802.1X overview)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NetworkAccess;
