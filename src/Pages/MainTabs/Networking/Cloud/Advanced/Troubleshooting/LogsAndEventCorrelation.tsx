import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
