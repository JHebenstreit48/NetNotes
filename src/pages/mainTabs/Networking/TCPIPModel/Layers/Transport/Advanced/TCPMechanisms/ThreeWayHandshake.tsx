import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ThreeWayHandshake = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Transport/Advanced/TCPMechanisms/ThreeWayHandshake';

  return (
    <>
      <PageLayout>
        <PageTitle title="Three-Way Handshake" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ThreeWayHandshake;
