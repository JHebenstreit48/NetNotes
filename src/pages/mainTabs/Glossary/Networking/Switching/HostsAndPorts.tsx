import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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