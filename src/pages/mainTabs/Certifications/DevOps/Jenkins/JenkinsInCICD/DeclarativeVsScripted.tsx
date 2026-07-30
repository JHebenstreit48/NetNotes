import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const DeclarativeVsScripted = () => {
  const markdownFilePath = 'Certifications/DevOps/Jenkins/JenkinsInCICD/DeclarativeVsScripted';

  return (
    <>
      <PageLayout>
        <PageTitle title="Declarative vs Scripted" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DeclarativeVsScripted;
