import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
