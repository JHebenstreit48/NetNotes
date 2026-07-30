import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
