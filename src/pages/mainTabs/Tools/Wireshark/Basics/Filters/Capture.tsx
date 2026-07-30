import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
