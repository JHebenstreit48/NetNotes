import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Trunking = () => {
  const markdownFilePath =
    'RouteAndSwitch/Switching/Advanced/VLAN/Operations/Trunking';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Trunking (802.1Q)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Trunking;