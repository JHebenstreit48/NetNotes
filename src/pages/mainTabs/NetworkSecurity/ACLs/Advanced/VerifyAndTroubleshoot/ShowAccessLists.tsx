import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
