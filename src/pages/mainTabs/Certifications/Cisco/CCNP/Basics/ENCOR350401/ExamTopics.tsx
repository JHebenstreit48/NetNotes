import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
