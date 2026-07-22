import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const JumboFrames = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/NetworkAccess/Advanced/DataLink/MTUAndFraming/JumboFrames';

  return (
    <>
      <PageLayout>
        <PageTitle title="Jumbo Frames" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default JumboFrames;
