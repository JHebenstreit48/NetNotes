import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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