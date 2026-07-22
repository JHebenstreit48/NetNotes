import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const DisplayFilters = () => {
  const markdownFilePath = 'Tools/Wireshark/Basics/Filters/Display';

  return (
    <>
      <PageLayout>
        <PageTitle title="Wireshark Basics - Display Filters" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DisplayFilters;
