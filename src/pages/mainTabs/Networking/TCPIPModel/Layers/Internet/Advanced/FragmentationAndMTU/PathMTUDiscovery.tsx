import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PathMTUDiscovery = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Internet/Advanced/FragmentationAndMTU/PathMTUDiscovery';

  return (
    <>
      <PageLayout>
        <PageTitle title="Path MTU Discovery" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PathMTUDiscovery;
