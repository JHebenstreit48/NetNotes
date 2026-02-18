import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const APModes = () => {
  const markdownFilePath = 'Networking/Wireless/Basics/WLANArchitecture/APModes';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="AP Modes (Local/Flex)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default APModes;
