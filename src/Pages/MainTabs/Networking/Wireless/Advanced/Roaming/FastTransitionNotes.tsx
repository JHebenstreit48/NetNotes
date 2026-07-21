import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
