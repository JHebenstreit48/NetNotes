import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const InlineVsSPANTAP = () => {
  const markdownFilePath = 'NetworkSecurity/IDSAndIPS/Basics/PlacementAndTuning/InlineVsSPANTAP';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Inline vs SPAN/TAP" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InlineVsSPANTAP;
