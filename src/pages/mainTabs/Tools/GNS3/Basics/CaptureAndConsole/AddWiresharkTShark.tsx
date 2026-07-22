import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
