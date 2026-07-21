import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
