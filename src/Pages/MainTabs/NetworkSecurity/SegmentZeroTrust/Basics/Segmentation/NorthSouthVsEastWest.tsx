import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
