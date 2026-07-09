import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TroubleshootingAndBestPractices = () => {
  const markdownFilePath = 'Networking/Routing/Advanced/StaticRouting/TroubleshootingAndBestPractices';

  return (
    <>
      <PageLayout>
        <PageTitle title="Troubleshooting & Best Practices" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TroubleshootingAndBestPractices;
