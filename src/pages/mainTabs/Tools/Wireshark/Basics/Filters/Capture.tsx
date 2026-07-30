import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
