import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ObjectiveHeatmap = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNA/Advanced/WeakAreasAndRetros/ObjectiveHeatmap';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Objective Heatmap" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ObjectiveHeatmap;
