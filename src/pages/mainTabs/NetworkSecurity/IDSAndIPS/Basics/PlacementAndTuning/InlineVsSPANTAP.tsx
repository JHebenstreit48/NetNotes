import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const InlineVsSPANTAP = () => {
  const markdownFilePath = 'NetworkSecurity/IDSAndIPS/Basics/PlacementAndTuning/InlineVsSPANTAP';

  return (
    <>
      <PageLayout>
        <PageTitle title="Inline vs SPAN/TAP" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InlineVsSPANTAP;
