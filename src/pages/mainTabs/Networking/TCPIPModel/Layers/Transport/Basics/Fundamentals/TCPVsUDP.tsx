import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
