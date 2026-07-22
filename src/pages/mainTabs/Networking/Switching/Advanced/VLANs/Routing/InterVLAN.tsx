import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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