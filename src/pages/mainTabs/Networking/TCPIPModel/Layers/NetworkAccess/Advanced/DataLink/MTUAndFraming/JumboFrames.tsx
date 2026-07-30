import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
