import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const CaptureInterfaces = () => {
  const markdownFilePath = 'Tools/Wireshark/Basics/Fundamentals/CaptureInterfaces';

  return (
    <>
      <PageLayout>
        <PageTitle title="Wireshark Fundamentals - Capture Interfaces" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CaptureInterfaces;