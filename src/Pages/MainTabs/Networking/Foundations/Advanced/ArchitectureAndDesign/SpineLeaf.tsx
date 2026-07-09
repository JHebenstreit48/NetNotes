import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SpineLeaf = () => {
  const markdownFilePath = 'Networking/Foundations/Advanced/ArchitectureAndDesign/SpineLeaf';

  return (
    <>
      <PageLayout>
        <PageTitle title="Spine-Leaf" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SpineLeaf;
