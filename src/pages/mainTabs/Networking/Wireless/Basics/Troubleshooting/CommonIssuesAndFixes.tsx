import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CommonIssuesAndFixes = () => {
  const markdownFilePath = 'Networking/Wireless/Basics/Troubleshooting/CommonIssuesAndFixes';

  return (
    <>
      <PageLayout>
        <PageTitle title="Common Issues & Fixes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CommonIssuesAndFixes;
