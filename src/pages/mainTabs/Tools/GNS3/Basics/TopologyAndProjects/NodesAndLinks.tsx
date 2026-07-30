import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
