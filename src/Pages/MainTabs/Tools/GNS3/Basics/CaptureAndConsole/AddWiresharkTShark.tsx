import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
