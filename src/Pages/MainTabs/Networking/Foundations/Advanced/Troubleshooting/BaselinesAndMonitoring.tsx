import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BaselinesAndMonitoring = () => {
  const markdownFilePath = 'Networking/Foundations/Advanced/Troubleshooting/BaselinesAndMonitoring';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Baselines & Monitoring" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BaselinesAndMonitoring;
