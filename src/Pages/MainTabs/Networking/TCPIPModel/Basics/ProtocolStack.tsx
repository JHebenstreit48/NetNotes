import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ProtocolStack = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Basics/ProtocolStack';

  return (
    <>
      <PageLayout>
        <PageTitle title="TCP/IP Model - Basics - Protocol Stack" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProtocolStack;