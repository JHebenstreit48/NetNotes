import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
