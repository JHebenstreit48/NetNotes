import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Boson = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNA/Advanced/PracticeTests/Boson';

  return (
    <>
      <PageLayout>
        <PageTitle title="Boson" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Boson;
