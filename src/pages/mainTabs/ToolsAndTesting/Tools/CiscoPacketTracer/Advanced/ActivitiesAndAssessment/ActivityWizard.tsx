import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
