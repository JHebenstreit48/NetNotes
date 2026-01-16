import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ConsoleAccess = () => {
  const markdownFilePath = 'Tools/GNS3/Basics/CaptureAndConsole/ConsoleAccess';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Console Access (Telnet/Serial/VNC)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ConsoleAccess;
