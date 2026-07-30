import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SwitchesAndConnectors = () => {
  const markdownFilePath = 'Networking/Switching/Basics/HardwareAndPortHistory/SwitchesAndConnectors';

  return (
    <>
      <PageLayout>
        <PageTitle title="Switching - Switches and Connectors" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SwitchesAndConnectors;