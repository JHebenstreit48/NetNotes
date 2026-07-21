import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const CKADOverview = () => {
  const markdownFilePath = 'Certifications/DevOps/Kubernetes/CKADAppDeveloper/CKADOverview';

  return (
    <>
      <PageLayout>
        <PageTitle title="CKAD Overview" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CKADOverview;
