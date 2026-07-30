import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
