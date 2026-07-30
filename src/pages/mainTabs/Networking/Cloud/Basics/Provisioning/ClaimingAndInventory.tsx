import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ClaimingAndInventory = () => {
  const markdownFilePath =
    'Networking/Cloud/Basics/Provisioning/ClaimingAndInventory';

  return (
    <>
      <PageLayout>
        <PageTitle title="Cloud - Claiming & Inventory" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ClaimingAndInventory;