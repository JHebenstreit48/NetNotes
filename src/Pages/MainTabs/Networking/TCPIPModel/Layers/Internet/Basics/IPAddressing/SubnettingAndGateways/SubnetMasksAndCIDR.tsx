import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SubnetMasksAndCIDR = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Internet/Basics/IPAddressing/SubnettingAndGateways/SubnetMasksAndCIDR';

  return (
    <>
      <PageLayout>
        <PageTitle title="Internet Layer - IP Addressing - Subnetting & Gateways - Subnet Masks & CIDR" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SubnetMasksAndCIDR;