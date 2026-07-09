import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Trunking = () => {
  const markdownFilePath =
    'Networking/Switching/Advanced/VLAN/Operations/Trunking';

  return (
    <>
      <PageLayout>
        <PageTitle title="Trunking (802.1Q)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Trunking;