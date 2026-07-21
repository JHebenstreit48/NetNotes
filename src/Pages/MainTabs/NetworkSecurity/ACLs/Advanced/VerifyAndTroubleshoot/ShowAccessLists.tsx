import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const ShowAccessLists = () => {
  const markdownFilePath = 'NetworkSecurity/ACLs/Advanced/VerifyAndTroubleshoot/ShowAccessLists';

  return (
    <>
      <PageLayout>
        <PageTitle title="show access-lists" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ShowAccessLists;
