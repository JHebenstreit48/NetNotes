import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
