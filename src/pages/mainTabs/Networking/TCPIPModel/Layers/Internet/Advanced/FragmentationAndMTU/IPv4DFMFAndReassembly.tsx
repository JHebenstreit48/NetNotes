import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const IPv4DFMFAndReassembly = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Internet/Advanced/FragmentationAndMTU/IPv4DFMFAndReassembly';

  return (
    <>
      <PageLayout>
        <PageTitle title="IPv4 DF/MF & Reassembly" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IPv4DFMFAndReassembly;
