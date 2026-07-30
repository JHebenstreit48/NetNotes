import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const TimelineAndMilestones = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNP/Basics/PlanningAndStudy/TimelineAndMilestones';

  return (
    <>
      <PageLayout>
        <PageTitle title="Timeline & Milestones" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TimelineAndMilestones;
