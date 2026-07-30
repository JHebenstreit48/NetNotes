import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
