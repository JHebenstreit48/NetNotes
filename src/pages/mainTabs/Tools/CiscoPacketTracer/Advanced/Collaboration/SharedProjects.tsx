import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
