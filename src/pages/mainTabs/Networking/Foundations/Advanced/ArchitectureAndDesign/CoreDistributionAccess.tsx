import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CoreDistributionAccess = () => {
  const markdownFilePath = 'Networking/Foundations/Advanced/ArchitectureAndDesign/CoreDistributionAccess';

  return (
    <>
      <PageLayout>
        <PageTitle title="Core/Distribution/Access" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CoreDistributionAccess;
