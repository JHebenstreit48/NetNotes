import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const InterVLAN = () => {
  const markdownFilePath = 'RouteAndSwitch/Switching/Advanced/VLANs/Routing/InterVLAN';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Inter-VLAN Routing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InterVLAN;