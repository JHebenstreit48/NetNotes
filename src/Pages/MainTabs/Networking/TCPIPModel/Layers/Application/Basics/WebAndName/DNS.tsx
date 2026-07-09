import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DNS = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Application/Basics/WebAndName/DNS';

  return (
    <>
      <PageLayout>
        <PageTitle title="TCP/IP Model - Application Layer - DNS" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DNS;