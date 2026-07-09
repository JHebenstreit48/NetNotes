import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
