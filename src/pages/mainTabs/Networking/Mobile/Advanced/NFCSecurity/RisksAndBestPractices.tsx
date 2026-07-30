import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
