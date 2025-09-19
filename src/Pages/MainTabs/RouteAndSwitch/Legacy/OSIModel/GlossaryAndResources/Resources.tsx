import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Resources = () => {
  const markdownFilePath =
    '/CoreConcepts/Basics/OSIModel/Overview/Resources';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="OSI Model Resources" />
        <Notes
          filePath={markdownFilePath}
        />
      </PageLayout>
    </>
  );
};

export default Resources;