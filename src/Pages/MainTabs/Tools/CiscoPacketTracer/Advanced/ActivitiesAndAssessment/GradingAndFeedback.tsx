import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const GradingAndFeedback = () => {
  const markdownFilePath = 'Tools/CiscoPacketTracer/Advanced/ActivitiesAndAssessment/GradingAndFeedback';

  return (
    <>
      <PageLayout>
        <PageTitle title="Grading & Feedback" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GradingAndFeedback;
