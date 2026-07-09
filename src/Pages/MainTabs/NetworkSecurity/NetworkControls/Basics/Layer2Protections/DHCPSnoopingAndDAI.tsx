import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const DHCPSnoopingAndDAI = () => {
  const markdownFilePath = 'NetworkSecurity/NetworkControls/Basics/Layer2Protections/DHCPSnoopingAndDAI';

  return (
    <>
      <PageLayout>
        <PageTitle title="DHCP Snooping & DAI" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default DHCPSnoopingAndDAI;
