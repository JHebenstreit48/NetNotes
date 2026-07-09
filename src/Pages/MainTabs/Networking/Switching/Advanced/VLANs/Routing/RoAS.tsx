import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RoAS = () => {
  const markdownFilePath = 'Networking/Switching/Advanced/VLAN/Routing/RoAS';

  return (
    <>
      <PageLayout>
        <PageTitle title="Router-on-a-Stick (RoAS)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RoAS;