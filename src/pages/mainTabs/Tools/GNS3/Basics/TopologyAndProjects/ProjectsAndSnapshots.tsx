import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ProjectsAndSnapshots = () => {
  const markdownFilePath = 'Tools/GNS3/Basics/TopologyAndProjects/ProjectsAndSnapshots';

  return (
    <>
      <PageLayout>
        <PageTitle title="Projects & Snapshots" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProjectsAndSnapshots;
