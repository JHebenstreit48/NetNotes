import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
