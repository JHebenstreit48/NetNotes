import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Handoffs = () => {
  const markdownFilePath = 'Networking/Mobile/Advanced/CellularPerformance/Handoffs';

  return (
    <>
      <PageLayout>
        <PageTitle title="Handoffs (Concepts)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Handoffs;
