import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CertificationOverview = () => {
  const markdownFilePath = 'Certifications/DevOps/AzureDevOps/AZ400/CertificationOverview';

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
