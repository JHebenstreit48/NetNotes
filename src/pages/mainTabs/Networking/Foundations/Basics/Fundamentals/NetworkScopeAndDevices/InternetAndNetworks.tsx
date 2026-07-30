import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Internet = () => {
  const markdownFilePath = 'Networking/Foundations/Basics/Fundamentals/NetworkScopeAndDevices/Internet';

  return (
    <>
      <PageLayout>
        <PageTitle title="Fundamentals - Internet and Global Networks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Internet;