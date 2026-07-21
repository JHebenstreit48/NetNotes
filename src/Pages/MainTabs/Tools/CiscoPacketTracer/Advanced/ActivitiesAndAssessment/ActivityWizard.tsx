import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
