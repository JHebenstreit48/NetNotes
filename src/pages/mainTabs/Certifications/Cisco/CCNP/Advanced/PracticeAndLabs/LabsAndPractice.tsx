import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const LabsAndPractice = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNP/Advanced/PracticeAndLabs/LabsAndPractice';

  return (
    <>
      <PageLayout>
        <PageTitle title="Labs & Practice" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LabsAndPractice;
