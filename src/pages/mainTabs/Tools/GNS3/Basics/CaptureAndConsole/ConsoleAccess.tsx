import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const ConsoleAccess = () => {
  const markdownFilePath = 'Tools/GNS3/Basics/CaptureAndConsole/ConsoleAccess';

  return (
    <>
      <PageLayout>
        <PageTitle title="Console Access (Telnet/Serial/VNC)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ConsoleAccess;
