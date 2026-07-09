import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SkillsMeasured = () => {
  const markdownFilePath = 'Certifications/DevOps/AzureDevOps/AZ400/SkillsMeasured';

  return (
    <>
      <PageLayout>
        <PageTitle title="Skills Measured" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SkillsMeasured;
