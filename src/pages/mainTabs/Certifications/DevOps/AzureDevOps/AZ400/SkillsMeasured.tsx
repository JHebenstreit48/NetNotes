import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
