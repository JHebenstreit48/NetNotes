import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RoAS = () => {
  const markdownFilePath = 'RouteAndSwitch/Switching/Advanced/VLAN/Routing/RoAS';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Router-on-a-Stick (RoAS)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RoAS;