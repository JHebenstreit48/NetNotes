import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const InstallAndProfiles = () => {
  const markdownFilePath = 'Tools/Wireshark/Basics/Fundamentals/InstallAndProfiles';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Wireshark Fundamentals - Install & Profiles" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InstallAndProfiles;
