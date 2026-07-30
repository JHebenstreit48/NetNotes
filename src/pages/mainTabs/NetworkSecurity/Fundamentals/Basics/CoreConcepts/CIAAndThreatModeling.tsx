import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CIAAndThreatModeling = () => {
  const markdownFilePath = 'NetworkSecurity/Fundamentals/Basics/CoreConcepts/CIAAndThreatModeling';

  return (
    <>
      <PageLayout>
        <PageTitle title="CIA & Threat Modeling" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CIAAndThreatModeling;
