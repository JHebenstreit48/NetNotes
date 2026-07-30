import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
