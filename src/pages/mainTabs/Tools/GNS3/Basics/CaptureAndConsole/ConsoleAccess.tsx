import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
