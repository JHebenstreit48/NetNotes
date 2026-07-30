import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const TCPVsUDP = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Transport/Basics/Fundamentals/TCPvsUDP';

  return (
    <>
      <PageLayout>
        <PageTitle title="TCP vs UDP" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TCPVsUDP;
