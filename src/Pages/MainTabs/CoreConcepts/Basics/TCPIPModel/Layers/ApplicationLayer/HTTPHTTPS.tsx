import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header';
import Notes from '@/Components/PageComponents/Notes/NotesRendering/Notes';

const HTTPHTTPS = () => {
  const markdownFilePath = '/CoreNetworkingTopics/TCPIPModel/ApplicationLayer/HTTPHTTPS';

  return (
    <>
      <PageLayout>
        <Header text="HTTP/HTTPS" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HTTPHTTPS;