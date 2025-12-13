import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ClaimingAndInventory = () => {
  const markdownFilePath =
    'RouteAndSwitch/Cloud/Basics/Provisioning/ClaimingAndInventory';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Cloud - Claiming & Inventory" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ClaimingAndInventory;