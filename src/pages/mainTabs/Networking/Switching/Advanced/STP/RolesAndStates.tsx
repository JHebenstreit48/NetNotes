import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const RolesAndStates = () => {
  const markdownFilePath = 'Networking/Switching/Advanced/STP/RolesAndStates';

  return (
    <>
      <PageLayout>
        <PageTitle title="STP - Roles & States" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RolesAndStates;