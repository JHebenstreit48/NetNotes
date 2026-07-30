import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
