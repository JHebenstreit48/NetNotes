import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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