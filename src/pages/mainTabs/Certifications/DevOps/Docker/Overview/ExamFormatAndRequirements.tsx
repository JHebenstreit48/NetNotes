import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
