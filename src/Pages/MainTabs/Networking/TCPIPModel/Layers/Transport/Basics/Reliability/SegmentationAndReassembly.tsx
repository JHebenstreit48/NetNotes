import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
