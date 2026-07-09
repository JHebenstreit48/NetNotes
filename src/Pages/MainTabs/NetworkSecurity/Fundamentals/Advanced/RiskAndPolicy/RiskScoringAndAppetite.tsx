import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
