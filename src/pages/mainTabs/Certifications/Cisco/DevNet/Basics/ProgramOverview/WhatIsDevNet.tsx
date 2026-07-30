import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
