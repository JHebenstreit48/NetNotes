import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const StraightThroughVsCrossover = () => {
  const markdownFilePath =
    'Networking/TCPIPModel/Layers/NetworkAccess/Basics/Physical/WiringStandards/StraightThroughVsCrossover';

  return (
    <>
      <PageLayout>
        <PageTitle title="Network Access - Physical - Straight Through vs Crossover" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StraightThroughVsCrossover;