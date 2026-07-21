import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
