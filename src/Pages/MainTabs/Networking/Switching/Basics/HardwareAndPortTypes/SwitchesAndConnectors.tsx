import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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