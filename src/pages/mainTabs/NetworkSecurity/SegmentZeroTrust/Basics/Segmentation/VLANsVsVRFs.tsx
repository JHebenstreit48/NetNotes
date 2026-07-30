import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
