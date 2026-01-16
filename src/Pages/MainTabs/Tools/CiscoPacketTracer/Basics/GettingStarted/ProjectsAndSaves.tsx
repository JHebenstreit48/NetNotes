import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ProjectsAndSaves = () => {
  const markdownFilePath = 'Tools/CiscoPacketTracer/Basics/GettingStarted/ProjectsAndSaves';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Projects & Saves" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ProjectsAndSaves;
