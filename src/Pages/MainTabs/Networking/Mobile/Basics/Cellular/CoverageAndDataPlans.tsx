import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CoverageAndDataPlans = () => {
  const markdownFilePath = 'Networking/Mobile/Basics/Cellular/CoverageAndDataPlans';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Coverage & Data Plans" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CoverageAndDataPlans;
