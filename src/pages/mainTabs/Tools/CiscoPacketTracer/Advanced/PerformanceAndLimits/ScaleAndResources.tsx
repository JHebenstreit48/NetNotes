import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
