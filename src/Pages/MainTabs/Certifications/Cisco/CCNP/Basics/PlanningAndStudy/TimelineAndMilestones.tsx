import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
