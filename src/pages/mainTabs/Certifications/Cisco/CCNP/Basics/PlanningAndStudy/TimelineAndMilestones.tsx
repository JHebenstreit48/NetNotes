import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
