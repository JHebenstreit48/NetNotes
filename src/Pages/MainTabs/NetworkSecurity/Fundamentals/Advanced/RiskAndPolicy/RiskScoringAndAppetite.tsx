import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const RiskScoringAndAppetite = () => {
  const markdownFilePath = 'NetworkSecurity/Fundamentals/Advanced/RiskAndPolicy/RiskScoringAndAppetite';

  return (
    <>
      <PageLayout>
        <PageTitle title="Risk Scoring & Appetite" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RiskScoringAndAppetite;
