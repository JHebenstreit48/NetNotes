import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
