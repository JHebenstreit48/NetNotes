import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DHCPAndDNSWorkflow = () => {
  const markdownFilePath = 'Networking/Wireless/Basics/Association/DHCPAndDNSWorkflow';

  return (
    <>
      <PageLayout>
        <PageTitle title="DHCP & DNS Workflow" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DHCPAndDNSWorkflow;
