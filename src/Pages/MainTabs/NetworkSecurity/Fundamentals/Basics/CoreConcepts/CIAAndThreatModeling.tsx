import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
