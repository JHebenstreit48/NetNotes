import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CommonMistakes = () => {
  const markdownFilePath = 'NetworkSecurity/ACLs/Advanced/VerifyAndTroubleshoot/CommonMistakes';

  return (
    <>
      <PageLayout>
        <PageTitle title="Common Mistakes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CommonMistakes;
