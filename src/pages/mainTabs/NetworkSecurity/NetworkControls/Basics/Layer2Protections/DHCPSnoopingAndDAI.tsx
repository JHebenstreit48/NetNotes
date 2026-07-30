import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
