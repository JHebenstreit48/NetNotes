import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PracticeLabsAndRacks = () => {
  const markdownFilePath = 'Certifications/Cisco/CCIE/Advanced/Resources/PracticeLabsAndRacks';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Practice Labs & Racks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PracticeLabsAndRacks;
