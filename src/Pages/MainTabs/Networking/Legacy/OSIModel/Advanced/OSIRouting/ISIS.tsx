import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
