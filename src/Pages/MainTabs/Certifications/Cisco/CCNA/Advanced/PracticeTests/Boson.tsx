import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Boson = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNA/Advanced/PracticeTests/Boson';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Boson" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Boson;
