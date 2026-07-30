import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CKADomains = () => {
  const markdownFilePath = 'Certifications/DevOps/Kubernetes/CKAKubernetesAdministrator/CKADomains';

  return (
    <>
      <PageLayout>
        <PageTitle title="CKA Domains" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CKADomains;
