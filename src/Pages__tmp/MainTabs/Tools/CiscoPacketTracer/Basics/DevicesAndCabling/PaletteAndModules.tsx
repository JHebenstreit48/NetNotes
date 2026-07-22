import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
