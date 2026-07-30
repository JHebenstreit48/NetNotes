import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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