import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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