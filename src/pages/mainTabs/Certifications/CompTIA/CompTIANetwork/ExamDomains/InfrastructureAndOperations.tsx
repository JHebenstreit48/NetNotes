import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const InfrastructureAndOperations = () => {
  const markdownFilePath = 'Certifications/CompTIA/CompTIANetwork/ExamDomains/InfrastructureAndOperations';

  return (
    <>
      <PageLayout>
        <PageTitle title="Infrastructure & Operations" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InfrastructureAndOperations;
