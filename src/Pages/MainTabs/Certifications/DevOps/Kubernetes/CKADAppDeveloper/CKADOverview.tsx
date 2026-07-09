import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
