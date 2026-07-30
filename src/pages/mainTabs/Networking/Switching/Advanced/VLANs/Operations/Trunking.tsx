import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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