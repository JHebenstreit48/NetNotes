import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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