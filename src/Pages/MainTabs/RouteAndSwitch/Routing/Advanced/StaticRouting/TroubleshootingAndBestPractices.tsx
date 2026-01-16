import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TroubleshootingAndBestPractices = () => {
  const markdownFilePath = 'RouteAndSwitch/Routing/Advanced/StaticRouting/TroubleshootingAndBestPractices';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Troubleshooting & Best Practices" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TroubleshootingAndBestPractices;
