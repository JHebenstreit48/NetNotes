import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const WhatIsDevNet = () => {
  const markdownFilePath = 'Certifications/Cisco/DevNet/Basics/ProgramOverview/WhatIsDevNet';

  return (
    <>
      <PageLayout>
        <PageTitle title="What is DevNet?" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WhatIsDevNet;
