import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StartupRunningFiles = () => {
  const markdownFilePath = 'Tools/CiscoPacketTracer/Basics/ConfigurationBasics/StartupRunningFiles';

  return (
    <>
      <PageLayout>
        <PageTitle title="Startup/Running Files" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StartupRunningFiles;
