import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IGPVsEGP = () => {
  const markdownFilePath = 'Networking/Routing/Basics/ProtocolFamilies/IGPVsEGP';

  return (
    <>
      <PageLayout>
        <PageTitle title="IGP vs EGP" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IGPVsEGP;
