import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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