import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StudyPlan = () => {
  const markdownFilePath = 'Certifications/Cisco/CCIE/Basics/PrepFoundations/StudyPlan';

  return (
    <>
      <PageLayout>
        <PageTitle title="Study Plan" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StudyPlan;
