import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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