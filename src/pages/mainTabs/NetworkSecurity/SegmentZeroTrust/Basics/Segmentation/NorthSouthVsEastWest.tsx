import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const NorthSouthVsEastWest = () => {
  const markdownFilePath = 'NetworkSecurity/SegmentZeroTrust/Basics/Segmentation/NorthSouthVsEastWest';

  return (
    <>
      <PageLayout>
        <PageTitle title="North–South vs East–West" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NorthSouthVsEastWest;
