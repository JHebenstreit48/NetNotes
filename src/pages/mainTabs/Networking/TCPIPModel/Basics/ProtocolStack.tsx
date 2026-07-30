import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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