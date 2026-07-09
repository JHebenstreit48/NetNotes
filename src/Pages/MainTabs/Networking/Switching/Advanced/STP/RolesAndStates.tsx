import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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