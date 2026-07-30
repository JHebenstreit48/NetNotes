import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CertificationOverview = () => {
  const markdownFilePath = 'Certifications/DevOps/TerraformAssociate/HashiCorpTerraform/CertificationOverview';

  return (
    <>
      <PageLayout>
        <PageTitle title="Certification Overview" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CertificationOverview;
