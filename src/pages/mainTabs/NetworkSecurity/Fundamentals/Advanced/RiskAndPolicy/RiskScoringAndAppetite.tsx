import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
