import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const ObjectiveHeatmap = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNA/Advanced/WeakAreasAndRetros/ObjectiveHeatmap';

  return (
    <>
      <PageLayout>
        <PageTitle title="Objective Heatmap" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ObjectiveHeatmap;
