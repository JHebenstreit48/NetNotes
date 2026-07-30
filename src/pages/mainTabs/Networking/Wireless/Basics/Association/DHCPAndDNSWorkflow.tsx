import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
