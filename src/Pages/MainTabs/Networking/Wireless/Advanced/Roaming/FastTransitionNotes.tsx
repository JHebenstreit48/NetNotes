import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FastTransitionNotes = () => {
  const markdownFilePath = 'Networking/Wireless/Advanced/Roaming/FastTransitionNotes';

  return (
    <>
      <PageLayout>
        <PageTitle title="Fast Transition Notes" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FastTransitionNotes;
