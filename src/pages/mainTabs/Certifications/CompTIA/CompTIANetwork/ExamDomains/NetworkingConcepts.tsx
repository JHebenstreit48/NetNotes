import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
