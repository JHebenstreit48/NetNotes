import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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