import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const ProjectsAndSaves = () => {
  const markdownFilePath = 'Tools/CiscoPacketTracer/Basics/Fundamentals/ProjectsAndSaves';

  return (
    <>
      <PageLayout>
        <PageTitle title="Projects & Saves" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProjectsAndSaves;
