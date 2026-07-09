import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
