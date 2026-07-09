import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CaptureFilters = () => {
  const markdownFilePath = 'Tools/Wireshark/Basics/Filters/Capture';

  return (
    <>
      <PageLayout>
        <PageTitle title="Wireshark Basics - Capture Filters" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CaptureFilters;
