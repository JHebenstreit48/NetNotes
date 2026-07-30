import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const BaselinesAndMonitoring = () => {
  const markdownFilePath = 'Networking/Foundations/Advanced/Troubleshooting/BaselinesAndMonitoring';

  return (
    <>
      <PageLayout>
        <PageTitle title="Baselines & Monitoring" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BaselinesAndMonitoring;
