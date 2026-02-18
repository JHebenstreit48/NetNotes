import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DNS = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Application/WebAndName/DNS';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="TCP/IP Model - Application Layer - DNS" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DNS;