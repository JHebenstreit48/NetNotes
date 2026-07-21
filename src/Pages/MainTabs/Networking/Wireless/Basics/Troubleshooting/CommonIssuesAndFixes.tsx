import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
