import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
