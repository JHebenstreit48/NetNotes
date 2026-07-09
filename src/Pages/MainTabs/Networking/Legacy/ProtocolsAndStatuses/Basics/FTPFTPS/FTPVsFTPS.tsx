import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FTPVsFTPS = () => {
  const markdownFilePath = 'Networking/Legacy/ProtocolsAndStatuses/Basics/FTPFTPS/FTPVsFTPS';

  return (
    <>
      <PageLayout>
        <PageTitle title="FTP vs FTPS" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FTPVsFTPS;
