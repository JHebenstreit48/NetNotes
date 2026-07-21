import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
