import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PathMTUDiscovery = () => {
  const markdownFilePath = 'RouteAndSwitch/TCPIPModel/Layers/Internet/Advanced/FragmentationAndMTU/PathMTUDiscovery';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Path MTU Discovery" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PathMTUDiscovery;
