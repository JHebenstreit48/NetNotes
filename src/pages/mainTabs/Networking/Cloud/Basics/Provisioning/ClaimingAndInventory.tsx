import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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