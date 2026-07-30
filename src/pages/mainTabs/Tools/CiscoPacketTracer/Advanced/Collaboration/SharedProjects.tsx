import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const SharedProjects = () => {
  const markdownFilePath = 'Tools/CiscoPacketTracer/Advanced/Collaboration/SharedProjects';

  return (
    <>
      <PageLayout>
        <PageTitle title="Shared Projects" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SharedProjects;
