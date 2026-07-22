import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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