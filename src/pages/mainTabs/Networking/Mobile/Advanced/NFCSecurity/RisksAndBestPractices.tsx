import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const RisksAndBestPractices = () => {
  const markdownFilePath = 'Networking/Mobile/Advanced/NFCSecurity/RisksAndBestPractices';

  return (
    <>
      <PageLayout>
        <PageTitle title="Risks & Best Practices" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RisksAndBestPractices;
