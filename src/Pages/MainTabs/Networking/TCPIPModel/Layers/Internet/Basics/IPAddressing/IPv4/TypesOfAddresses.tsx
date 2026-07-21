import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const TypesOfAddresses = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Internet/Basics/IPAddressing/IPv4/TypesOfAddresses';

  return (
    <>
      <PageLayout>
        <PageTitle title="Internet Layer - IP Addressing - IPv4 Types of Addresses" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TypesOfAddresses;