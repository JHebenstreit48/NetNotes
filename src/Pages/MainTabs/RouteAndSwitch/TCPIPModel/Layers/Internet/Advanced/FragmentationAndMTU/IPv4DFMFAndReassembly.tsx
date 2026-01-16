import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IPv4DFMFAndReassembly = () => {
  const markdownFilePath = 'RouteAndSwitch/TCPIPModel/Layers/Internet/Advanced/FragmentationAndMTU/IPv4DFMFAndReassembly';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="IPv4 DF/MF & Reassembly" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IPv4DFMFAndReassembly;
