import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RisksAndBestPractices = () => {
  const markdownFilePath = 'Networking/Mobile/Advanced/NFCSecurity/RisksAndBestPractices';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Risks & Best Practices" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RisksAndBestPractices;
