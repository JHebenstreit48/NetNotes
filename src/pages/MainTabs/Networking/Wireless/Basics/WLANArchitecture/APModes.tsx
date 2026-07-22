import PageLayout from '@/components/NavigationUI/PageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

const APModes = () => {
  const markdownFilePath = 'Networking/Wireless/Basics/WLANArchitecture/APModes';

  return (
    <>
      <PageLayout>
        <PageTitle title="AP Modes (Local/Flex)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default APModes;
