import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
