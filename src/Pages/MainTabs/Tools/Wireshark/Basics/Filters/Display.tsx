import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DisplayFilters = () => {
  const markdownFilePath = 'Tools/Wireshark/Basics/Filters/Display';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Wireshark Basics - Display Filters" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DisplayFilters;
