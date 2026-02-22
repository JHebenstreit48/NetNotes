import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const StraightThroughVsCrossover = () => {
  const markdownFilePath =
    'Networking/TCPIPModel/Layers/NetworkAccess/Basics/Physical/WiringStandards/StraightThroughVsCrossover';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Network Access - Physical - Straight Through vs Crossover" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default StraightThroughVsCrossover;