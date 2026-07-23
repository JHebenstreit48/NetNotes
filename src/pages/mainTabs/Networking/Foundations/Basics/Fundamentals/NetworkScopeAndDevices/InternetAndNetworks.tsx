import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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