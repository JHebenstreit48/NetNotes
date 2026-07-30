import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const AddressStructure = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Internet/Basics/IPAddressing/IPv4/AddressStructure';

  return (
    <>
      <PageLayout>
        <PageTitle title="Internet Layer - IP Addressing - IPv4 Address Structure" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AddressStructure;