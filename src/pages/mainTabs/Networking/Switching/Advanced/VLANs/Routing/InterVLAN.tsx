import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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