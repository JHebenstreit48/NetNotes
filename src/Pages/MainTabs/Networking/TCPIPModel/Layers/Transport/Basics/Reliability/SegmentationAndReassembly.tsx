import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const SegmentationAndReassembly = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Transport/Basics/Reliability/SegmentationAndReassembly';

  return (
    <>
      <PageLayout>
        <PageTitle title="Segmentation & Reassembly" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SegmentationAndReassembly;
