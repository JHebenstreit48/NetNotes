import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
