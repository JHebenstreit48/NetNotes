import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
