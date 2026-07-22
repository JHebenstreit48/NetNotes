import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const InstallAndProfiles = () => {
  const markdownFilePath = 'Tools/Wireshark/Basics/Fundamentals/InstallAndProfiles';

  return (
    <>
      <PageLayout>
        <PageTitle title="Wireshark Fundamentals - Install & Profiles" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InstallAndProfiles;
