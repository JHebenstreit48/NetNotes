import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
