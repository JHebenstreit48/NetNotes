import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PaletteAndModules = () => {
  const markdownFilePath = 'Tools/CiscoPacketTracer/Basics/DevicesAndCabling/PaletteAndModules';

  return (
    <>
      <PageLayout>
        <PageTitle title="Palette & Modules" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PaletteAndModules;
