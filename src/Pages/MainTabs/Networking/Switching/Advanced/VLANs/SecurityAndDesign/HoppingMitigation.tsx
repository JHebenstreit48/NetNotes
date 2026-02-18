import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const HoppingMitigation = () => {
  const markdownFilePath = 'Networking/Switching/Advanced/VLAN/SecurityAndDesign/HoppingMitigation';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="VLAN Hopping Mitigation" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default HoppingMitigation;