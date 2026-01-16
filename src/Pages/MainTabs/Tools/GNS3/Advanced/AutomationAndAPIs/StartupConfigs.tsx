import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StartupConfigs = () => {
  const markdownFilePath = 'Tools/GNS3/Advanced/AutomationAndAPIs/StartupConfigs';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Startup Configs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StartupConfigs;
