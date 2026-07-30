import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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