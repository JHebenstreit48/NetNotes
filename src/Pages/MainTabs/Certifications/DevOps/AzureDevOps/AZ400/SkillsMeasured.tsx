import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
