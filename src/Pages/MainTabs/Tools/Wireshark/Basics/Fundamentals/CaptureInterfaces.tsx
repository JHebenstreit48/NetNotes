import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CaptureInterfaces = () => {
  const markdownFilePath = 'Tools/Wireshark/Basics/Fundamentals/CaptureInterfaces';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Wireshark Fundamentals - Capture Interfaces" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CaptureInterfaces;