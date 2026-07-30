import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const HealthAndTelemetry = () => {
  const markdownFilePath =
    'Networking/Cloud/Basics/Monitoring/HealthAndTelemetry';

  return (
    <>
      <PageLayout>
        <PageTitle title="Cloud - Health & Telemetry" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HealthAndTelemetry;