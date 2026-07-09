import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CICDForLabs = () => {
  const markdownFilePath = 'Certifications/Cisco/DevNet/Advanced/ToolsAndEnvironments/CICDForLabs';

  return (
    <>
      <PageLayout>
        <PageTitle title="CI/CD for Labs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CICDForLabs;
