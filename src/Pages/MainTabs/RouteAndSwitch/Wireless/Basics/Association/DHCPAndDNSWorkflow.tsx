import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DHCPAndDNSWorkflow = () => {
  const markdownFilePath = 'RouteAndSwitch/Wireless/Basics/Association/DHCPAndDNSWorkflow';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="DHCP & DNS Workflow" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DHCPAndDNSWorkflow;
