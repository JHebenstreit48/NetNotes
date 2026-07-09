import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
