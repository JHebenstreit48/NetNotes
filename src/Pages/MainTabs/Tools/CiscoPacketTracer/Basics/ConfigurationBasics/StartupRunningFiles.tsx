import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
