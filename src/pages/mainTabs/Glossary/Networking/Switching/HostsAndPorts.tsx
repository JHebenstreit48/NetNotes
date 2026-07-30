import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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