import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FastTransitionNotes = () => {
  const markdownFilePath = 'RouteAndSwitch/Wireless/Advanced/Roaming/FastTransitionNotes';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Fast Transition Notes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FastTransitionNotes;
