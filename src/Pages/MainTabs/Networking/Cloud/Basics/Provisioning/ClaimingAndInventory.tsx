import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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