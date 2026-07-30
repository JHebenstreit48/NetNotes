import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
