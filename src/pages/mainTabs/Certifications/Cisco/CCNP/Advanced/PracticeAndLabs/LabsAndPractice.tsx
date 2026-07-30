import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
