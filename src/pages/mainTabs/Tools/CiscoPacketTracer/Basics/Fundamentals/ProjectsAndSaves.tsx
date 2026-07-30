import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
