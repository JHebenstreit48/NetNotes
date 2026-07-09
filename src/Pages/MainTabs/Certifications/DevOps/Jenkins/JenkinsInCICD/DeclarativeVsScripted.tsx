import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
