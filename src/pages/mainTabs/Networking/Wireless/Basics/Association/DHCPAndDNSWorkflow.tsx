import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
