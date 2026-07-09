import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ExamFormatAndRequirements = () => {
  const markdownFilePath = 'Certifications/DevOps/Docker/Overview/ExamFormatAndRequirements';

  return (
    <>
      <PageLayout>
        <PageTitle title="Exam Format & Requirements" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ExamFormatAndRequirements;
