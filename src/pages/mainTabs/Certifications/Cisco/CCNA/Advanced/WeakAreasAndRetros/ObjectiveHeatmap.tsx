import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
