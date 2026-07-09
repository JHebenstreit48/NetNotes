import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
