import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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