import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const NodesAndLinks = () => {
  const markdownFilePath = 'Tools/GNS3/Basics/TopologyAndProjects/NodesAndLinks';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Nodes & Links" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NodesAndLinks;
