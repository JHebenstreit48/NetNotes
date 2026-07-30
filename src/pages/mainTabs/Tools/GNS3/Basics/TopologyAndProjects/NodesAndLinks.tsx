import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const NodesAndLinks = () => {
  const markdownFilePath = 'Tools/GNS3/Basics/TopologyAndProjects/NodesAndLinks';

  return (
    <>
      <PageLayout>
        <PageTitle title="Nodes & Links" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NodesAndLinks;
