import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
