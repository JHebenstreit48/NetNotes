import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
