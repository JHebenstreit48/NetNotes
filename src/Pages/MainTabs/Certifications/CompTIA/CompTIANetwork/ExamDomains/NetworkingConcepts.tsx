import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const NetworkingConcepts = () => {
  const markdownFilePath = 'Certifications/CompTIA/CompTIANetwork/ExamDomains/NetworkingConcepts';

  return (
    <>
      <PageLayout>
        <PageTitle title="Networking Concepts" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NetworkingConcepts;
