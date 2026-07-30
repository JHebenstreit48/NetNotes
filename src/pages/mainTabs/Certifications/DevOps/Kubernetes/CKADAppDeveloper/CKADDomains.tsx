import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CKADDomains = () => {
  const markdownFilePath = 'Certifications/DevOps/Kubernetes/CKADAppDeveloper/CKADDomains';

  return (
    <>
      <PageLayout>
        <PageTitle title="CKAD Domains" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CKADDomains;
