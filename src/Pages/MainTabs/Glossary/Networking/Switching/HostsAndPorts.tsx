import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const HostsAndPorts = () => {
  const markdownFilePath = 'Glossary/Networking/Switching/HostsAndPorts';

  return (
    <>
      <PageLayout>
        <PageTitle title="Switching - Hosts & Ports" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HostsAndPorts;