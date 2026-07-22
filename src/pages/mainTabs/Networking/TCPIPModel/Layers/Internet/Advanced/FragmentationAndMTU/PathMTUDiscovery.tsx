import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
