import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const MeasureUp = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNA/Advanced/PracticeTests/MeasureUp';

  return (
    <>
      <PageLayout>
        <PageTitle title="MeasureUp" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MeasureUp;
