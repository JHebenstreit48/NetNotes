import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ExamDomains = () => {
  const markdownFilePath = 'Certifications/DevOps/TerraformAssociate/HashiCorpTerraform/ExamDomains';

  return (
    <>
      <PageLayout>
        <PageTitle title="Exam Domains" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ExamDomains;
