import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CommonIssuesAndFixes = () => {
  const markdownFilePath = 'RouteAndSwitch/Wireless/Basics/Troubleshooting/CommonIssuesAndFixes';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Common Issues & Fixes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CommonIssuesAndFixes;
