import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
