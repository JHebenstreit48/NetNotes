import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
