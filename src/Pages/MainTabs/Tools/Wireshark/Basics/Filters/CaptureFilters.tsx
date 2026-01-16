import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CaptureFilters = () => {
  const markdownFilePath = 'Tools/Wireshark/Basics/Filters/CaptureFilters';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Capture Filters" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CaptureFilters;
