import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FTPSFTP = () => {
  const markdownFilePath = 'RouteAndSwitch/TCPIPModel/Layers/Application/Advanced/NetworkServices/FTPSFTP';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="FTP/SFTP" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FTPSFTP;
