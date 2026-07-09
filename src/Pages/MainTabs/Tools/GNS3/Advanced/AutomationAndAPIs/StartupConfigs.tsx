import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StartupConfigs = () => {
  const markdownFilePath = 'Tools/GNS3/Advanced/AutomationAndAPIs/StartupConfigs';

  return (
    <>
      <PageLayout>
        <PageTitle title="Startup Configs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StartupConfigs;
