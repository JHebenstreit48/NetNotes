import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CKAOverview = () => {
  const markdownFilePath = 'Certifications/DevOps/Kubernetes/CKAKubernetesAdministrator/CKAOverview';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="CKA Overview" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CKAOverview;
