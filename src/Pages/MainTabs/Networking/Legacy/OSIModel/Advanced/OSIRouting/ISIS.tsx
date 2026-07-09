import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ISIS = () => {
  const markdownFilePath = 'Networking/Legacy/OSIModel/Advanced/OSIRouting/ISIS';

  return (
    <>
      <PageLayout>
        <PageTitle title="IS-IS (OSI)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ISIS;
