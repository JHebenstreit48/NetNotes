import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const InterVLAN = () => {
  const markdownFilePath = 'Networking/Switching/Advanced/VLANs/Routing/InterVLAN';

  return (
    <>
      <PageLayout>
        <PageTitle title="Inter-VLAN Routing" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InterVLAN;