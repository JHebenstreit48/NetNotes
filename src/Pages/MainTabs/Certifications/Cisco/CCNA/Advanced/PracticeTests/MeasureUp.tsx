import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MeasureUp = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNA/Advanced/PracticeTests/MeasureUp';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="MeasureUp" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MeasureUp;
