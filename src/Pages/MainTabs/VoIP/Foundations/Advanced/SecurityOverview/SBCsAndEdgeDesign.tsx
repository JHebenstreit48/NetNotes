import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
