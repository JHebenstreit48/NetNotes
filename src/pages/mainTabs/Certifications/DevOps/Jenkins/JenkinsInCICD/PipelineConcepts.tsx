import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const PipelineConcepts = () => {
  const markdownFilePath = 'Certifications/DevOps/Jenkins/JenkinsInCICD/PipelineConcepts';

  return (
    <>
      <PageLayout>
        <PageTitle title="Pipeline Concepts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PipelineConcepts;
