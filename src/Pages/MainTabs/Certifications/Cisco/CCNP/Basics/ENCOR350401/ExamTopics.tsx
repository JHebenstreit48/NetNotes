import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
