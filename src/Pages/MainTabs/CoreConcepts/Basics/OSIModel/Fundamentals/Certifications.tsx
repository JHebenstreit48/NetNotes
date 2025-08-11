import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CertificationUse = () => {
  const markdownFilePath = '/CoreConcepts/Basics/OSIModel/Fundamentals/CertificationUsage';

  return (
    <>
      <PageLayout>
        <Header text="Certification Use" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CertificationUse;