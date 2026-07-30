import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
