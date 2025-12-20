import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PipelineConcepts = () => {
  const markdownFilePath = 'Certifications/DevOps/Jenkins/JenkinsInCICD/PipelineConcepts';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Pipeline Concepts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PipelineConcepts;
