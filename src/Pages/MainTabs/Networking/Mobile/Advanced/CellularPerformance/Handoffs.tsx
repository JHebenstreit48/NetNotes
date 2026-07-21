import PageLayout from '@/components/NavigationUI/PageLayout';
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
