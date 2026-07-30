import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SBCsAndEdgeDesign = () => {
  const markdownFilePath = 'VoIP/Foundations/Advanced/SecurityOverview/SBCsAndEdgeDesign';

  return (
    <>
      <PageLayout>
        <PageTitle title="SBCs and Edge Design" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SBCsAndEdgeDesign;
