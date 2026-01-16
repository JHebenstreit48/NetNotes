import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CoreDistributionAccess = () => {
  const markdownFilePath = 'RouteAndSwitch/Fundamentals/Advanced/ArchitectureAndDesign/CoreDistributionAccess';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Core/Distribution/Access" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CoreDistributionAccess;
