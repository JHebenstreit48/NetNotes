import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SharedProjects = () => {
  const markdownFilePath = 'Tools/CiscoPacketTracer/Advanced/Collaboration/SharedProjects';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Shared Projects" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SharedProjects;
