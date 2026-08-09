import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ModelAndLayerComparison = () => {
  const markdownFilePath = 'Networking/Legacy/OSIModel/Basics/Fundamentals/ModelAndLayerComparison';

  return (
    <>
      <PageLayout>
        <PageTitle title="OSI Model - Fundamentals - Model & Layer Comparison" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ModelAndLayerComparison;