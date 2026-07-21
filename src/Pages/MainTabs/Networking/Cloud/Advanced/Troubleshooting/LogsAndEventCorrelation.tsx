import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const LogsAndEventCorrelation = () => {
  const markdownFilePath = 'Networking/Cloud/Advanced/Troubleshooting/LogsAndEventCorrelation';

  return (
    <>
      <PageLayout>
        <PageTitle title="Logs & Event Correlation" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LogsAndEventCorrelation;
