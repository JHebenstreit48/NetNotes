import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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