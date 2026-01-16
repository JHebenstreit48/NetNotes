import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FTPVsFTPS = () => {
  const markdownFilePath = 'RouteAndSwitch/Legacy/ProtocolsAndStatuses/Basics/FTPFTPS/FTPVsFTPS';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="FTP vs FTPS" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FTPVsFTPS;
