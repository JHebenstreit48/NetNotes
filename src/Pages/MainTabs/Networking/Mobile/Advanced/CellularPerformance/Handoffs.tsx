import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Handoffs = () => {
  const markdownFilePath = 'Networking/Mobile/Advanced/CellularPerformance/Handoffs';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Handoffs (Concepts)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Handoffs;
