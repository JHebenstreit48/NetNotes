import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
