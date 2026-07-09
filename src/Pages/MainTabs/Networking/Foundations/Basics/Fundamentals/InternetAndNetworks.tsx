import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Internet = () => {
  const markdownFilePath = 'Networking/Foundations/Basics/Fundamentals/Internet';

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