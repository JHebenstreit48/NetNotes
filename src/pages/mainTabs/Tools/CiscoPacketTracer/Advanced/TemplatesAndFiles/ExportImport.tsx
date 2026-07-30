import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
