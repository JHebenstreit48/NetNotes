import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
