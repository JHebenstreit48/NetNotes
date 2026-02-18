import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SpineLeaf = () => {
  const markdownFilePath = 'Networking/Foundations/Advanced/ArchitectureAndDesign/SpineLeaf';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Spine-Leaf" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SpineLeaf;
