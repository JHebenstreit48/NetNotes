import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const OrchestrationBasics = () => {
  const markdownFilePath = 'Certifications/DevOps/Docker/ExamTopics/OrchestrationBasics';

  return (
    <>
      <PageLayout>
        <PageTitle title="Orchestration Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OrchestrationBasics;
