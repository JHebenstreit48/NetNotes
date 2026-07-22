import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const FTPSFTP = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Application/Advanced/NetworkServices/FtpSftp';

  return (
    <>
      <PageLayout>
        <PageTitle title="FTP/SFTP" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FTPSFTP;