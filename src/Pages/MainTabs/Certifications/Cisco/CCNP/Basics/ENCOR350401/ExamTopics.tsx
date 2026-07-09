import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ExamTopics = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNP/Basics/ENCOR350401/ExamTopics';

  return (
    <>
      <PageLayout>
        <PageTitle title="Exam Topics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ExamTopics;
