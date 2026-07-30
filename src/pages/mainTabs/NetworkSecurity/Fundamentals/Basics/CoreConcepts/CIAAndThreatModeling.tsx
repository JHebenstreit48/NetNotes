import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
