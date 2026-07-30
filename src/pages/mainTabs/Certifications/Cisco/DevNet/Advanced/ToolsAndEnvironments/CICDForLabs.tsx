import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
