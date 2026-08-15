import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
