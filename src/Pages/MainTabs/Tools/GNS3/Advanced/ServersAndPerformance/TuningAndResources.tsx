import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TuningAndResources = () => {
  const markdownFilePath = 'Tools/GNS3/Advanced/ServersAndPerformance/TuningAndResources';

  return (
    <>
      <PageLayout>
        <PageTitle title="Tuning & Resources" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TuningAndResources;
