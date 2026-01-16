import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ColumnsAndColoring = () => {
  const markdownFilePath = 'Tools/Wireshark/Advanced/Customization/ColumnsAndColoring';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Columns & Coloring" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ColumnsAndColoring;
