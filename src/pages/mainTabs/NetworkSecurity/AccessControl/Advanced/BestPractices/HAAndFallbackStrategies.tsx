import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
