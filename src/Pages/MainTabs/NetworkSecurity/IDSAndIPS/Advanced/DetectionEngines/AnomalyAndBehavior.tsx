import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AnomalyAndBehavior = () => {
  const markdownFilePath = 'NetworkSecurity/IDSAndIPS/Advanced/DetectionEngines/AnomalyAndBehavior';

  return (
    <>
      <PageLayout>
        <PageTitle title="Anomaly & Behavior" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AnomalyAndBehavior;
