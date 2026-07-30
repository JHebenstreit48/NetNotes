import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
