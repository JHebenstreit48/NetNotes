import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ActivityWizard = () => {
  const markdownFilePath = 'Tools/CiscoPacketTracer/Advanced/ActivitiesAndAssessment/ActivityWizard';

  return (
    <>
      <PageLayout>
        <PageTitle title="Activity Wizard" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ActivityWizard;
