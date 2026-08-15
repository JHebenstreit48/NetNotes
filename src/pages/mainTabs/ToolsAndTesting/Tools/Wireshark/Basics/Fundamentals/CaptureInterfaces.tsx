import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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