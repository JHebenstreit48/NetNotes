import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IGPVsEGP = () => {
  const markdownFilePath = 'RouteAndSwitch/Routing/Basics/ProtocolFamilies/IGPVsEGP';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="IGP vs EGP" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IGPVsEGP;
