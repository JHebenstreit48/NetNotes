import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const AddressTypesAndScope = () => {
  const markdownFilePath = 'Networking/TCPIPModel/Layers/Internet/Basics/IPAddressing/IPv6/AddressTypesAndScope';

  return (
    <>
      <PageLayout>
        <PageTitle title="Address Types & Scope" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AddressTypesAndScope;
