import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
