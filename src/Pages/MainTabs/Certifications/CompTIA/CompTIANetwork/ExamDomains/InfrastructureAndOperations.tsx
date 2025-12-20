import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const InfrastructureAndOperations = () => {
  const markdownFilePath = 'Certifications/CompTIA/CompTIANetwork/ExamDomains/InfrastructureAndOperations';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Infrastructure & Operations" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InfrastructureAndOperations;
