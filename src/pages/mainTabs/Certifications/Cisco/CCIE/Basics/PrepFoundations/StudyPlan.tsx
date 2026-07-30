import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
