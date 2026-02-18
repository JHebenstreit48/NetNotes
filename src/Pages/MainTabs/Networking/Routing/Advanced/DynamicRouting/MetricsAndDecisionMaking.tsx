import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MetricsAndDecisionMaking = () => {
  const markdownFilePath = 'Networking/Routing/Advanced/DynamicRouting/MetricsAndDecisionMaking';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Metrics & Decision Making" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MetricsAndDecisionMaking;
