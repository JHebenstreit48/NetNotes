import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ExportImport = () => {
  const markdownFilePath = 'Tools/CiscoPacketTracer/Advanced/TemplatesAndFiles/ExportImport';

  return (
    <>
      <PageLayout>
        <PageTitle title="Export/Import (PKA/PKZ)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ExportImport;
