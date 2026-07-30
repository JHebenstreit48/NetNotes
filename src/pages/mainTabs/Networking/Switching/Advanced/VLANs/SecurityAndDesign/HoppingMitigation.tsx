import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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