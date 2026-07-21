import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
