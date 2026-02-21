import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SwitchesAndConnectors = () => {
  const markdownFilePath = 'Networking/Switching/Basics/HardwareAndHistory/SwitchesAndConnectors';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Switching - Switches and Connectors" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SwitchesAndConnectors;