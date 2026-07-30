import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
