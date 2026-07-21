import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
