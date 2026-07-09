import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ScaleAndResources = () => {
  const markdownFilePath = 'Tools/CiscoPacketTracer/Advanced/PerformanceAndLimits/ScaleAndResources';

  return (
    <>
      <PageLayout>
        <PageTitle title="Scale & Resources" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ScaleAndResources;
