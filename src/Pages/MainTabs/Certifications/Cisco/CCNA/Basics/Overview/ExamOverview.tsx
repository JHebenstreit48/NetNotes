import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ExamOverview = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNA/Basics/Overview/ExamOverview';

  return (
    <>
      <PageLayout>
        <PageTitle title="Exam Overview" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ExamOverview;
