import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const VTP = () => {
  const markdownFilePath = 'RouteAndSwitch/Switching/Advanced/VLANs/Operations/VTP';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="VLAN Trunking Protocol (VTP)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default VTP;