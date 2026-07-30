import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
