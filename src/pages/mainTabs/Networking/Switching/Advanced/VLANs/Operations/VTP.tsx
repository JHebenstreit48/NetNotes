import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const VTP = () => {
  const markdownFilePath = 'Networking/Switching/Advanced/VLANs/Operations/VTP';

  return (
    <>
      <PageLayout>
        <PageTitle title="VLAN Trunking Protocol (VTP)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default VTP;