import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StudyPlan = () => {
  const markdownFilePath = 'Certifications/Cisco/CCIE/Basics/PrepFoundations/StudyPlan';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Study Plan" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StudyPlan;
