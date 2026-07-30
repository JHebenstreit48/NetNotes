import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ExamOptions = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNP/Advanced/ConcentrationExams/ExamOptions';

  return (
    <>
      <PageLayout>
        <PageTitle title="Exam Options" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ExamOptions;
