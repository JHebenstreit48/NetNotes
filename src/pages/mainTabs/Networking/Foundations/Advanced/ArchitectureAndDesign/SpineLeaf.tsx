import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
