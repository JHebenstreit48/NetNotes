import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ExamOverview = () => {
  const markdownFilePath = 'Certifications/Cisco/CCIE/Basics/WrittenExam/ExamOverview';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Exam Overview" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ExamOverview;
