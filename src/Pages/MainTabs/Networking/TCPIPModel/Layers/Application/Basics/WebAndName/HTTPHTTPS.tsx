import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const HTTPHTTPS = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Application/Basics/WebAndName/HTTPHTTPS';

  return (
    <>
      <PageLayout>
        <PageTitle title="TCP/IP Model - Application Layer - HTTP/HTTPS" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HTTPHTTPS;