import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
