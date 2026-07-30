import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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