import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IdentityAndAccessManagement = () => {
  const markdownFilePath = 'Certifications/CompTIA/CompTIASecurity/ExamDomains/IdentityAndAccessManagement';

  return (
    <>
      <PageLayout>
        <PageTitle title="Identity & Access Management" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IdentityAndAccessManagement;
