import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CKADomains = () => {
  const markdownFilePath = 'Certifications/DevOps/Kubernetes/CKAKubernetesAdministrator/CKADomains';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="CKA Domains" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CKADomains;
