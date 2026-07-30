import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
