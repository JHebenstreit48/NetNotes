import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
