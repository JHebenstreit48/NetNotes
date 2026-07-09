import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const HoppingMitigation = () => {
  const markdownFilePath = 'Networking/Switching/Advanced/VLAN/SecurityAndDesign/HoppingMitigation';

  return (
    <>
      <PageLayout>
        <PageTitle title="VLAN Hopping Mitigation" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HoppingMitigation;