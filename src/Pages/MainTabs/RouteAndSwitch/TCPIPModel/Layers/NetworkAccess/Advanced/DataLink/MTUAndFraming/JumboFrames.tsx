import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const JumboFrames = () => {
  const markdownFilePath = 'RouteAndSwitch/TCPIPModel/Layers/NetworkAccess/Advanced/DataLink/MTUAndFraming/JumboFrames';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Jumbo Frames" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default JumboFrames;
