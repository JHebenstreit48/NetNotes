import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
