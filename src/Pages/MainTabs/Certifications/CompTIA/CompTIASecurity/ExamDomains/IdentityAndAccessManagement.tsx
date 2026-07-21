import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
