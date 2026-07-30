import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const HAAndFallbackStrategies = () => {
  const markdownFilePath = 'NetworkSecurity/AccessControl/Advanced/BestPractices/HAAndFallbackStrategies';

  return (
    <>
      <PageLayout>
        <PageTitle title="HA & Fallback Strategies" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HAAndFallbackStrategies;
