import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
