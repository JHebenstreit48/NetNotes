import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ColumnsAndColoring = () => {
  const markdownFilePath = 'Tools/Wireshark/Advanced/Customization/ColumnsAndColoring';

  return (
    <>
      <PageLayout>
        <PageTitle title="Columns & Coloring" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ColumnsAndColoring;
