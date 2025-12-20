import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LabsAndPractice = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNP/Advanced/PracticeAndLabs/LabsAndPractice';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Labs & Practice" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LabsAndPractice;
