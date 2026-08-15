import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const AddWiresharkTShark = () => {
  const markdownFilePath = 'Tools/GNS3/Basics/CaptureAndConsole/AddWiresharkTShark';

  return (
    <>
      <PageLayout>
        <PageTitle title="Add Wireshark/TShark (GNS3)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AddWiresharkTShark;
