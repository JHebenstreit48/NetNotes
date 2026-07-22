import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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