import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
