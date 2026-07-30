import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
