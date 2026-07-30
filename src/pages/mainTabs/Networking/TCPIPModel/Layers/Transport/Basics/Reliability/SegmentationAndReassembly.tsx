import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
