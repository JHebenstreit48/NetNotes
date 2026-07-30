import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
