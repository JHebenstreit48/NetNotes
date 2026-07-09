import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const VLANsVsVRFs = () => {
  const markdownFilePath = 'NetworkSecurity/SegmentZeroTrust/Basics/Segmentation/VLANsVsVRFs';

  return (
    <>
      <PageLayout>
        <PageTitle title="VLANs vs VRFs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default VLANsVsVRFs;
