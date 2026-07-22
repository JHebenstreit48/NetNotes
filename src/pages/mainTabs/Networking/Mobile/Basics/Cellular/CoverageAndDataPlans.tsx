import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const CoverageAndDataPlans = () => {
  const markdownFilePath = 'Networking/Mobile/Basics/Cellular/CoverageAndDataPlans';

  return (
    <>
      <PageLayout>
        <PageTitle title="Coverage & Data Plans" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CoverageAndDataPlans;
