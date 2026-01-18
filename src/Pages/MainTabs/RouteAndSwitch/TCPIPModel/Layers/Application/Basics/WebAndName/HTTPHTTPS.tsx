import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const HTTPHTTPS = () => {
  const markdownFilePath = 'RouteAndSwitch/TCPIPModel/Layers/Application/WebAndName/HTTPHTTPS';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="TCP/IP Model - Application Layer - HTTP/HTTPS" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HTTPHTTPS;