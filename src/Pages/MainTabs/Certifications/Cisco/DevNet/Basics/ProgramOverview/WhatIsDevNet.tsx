import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const WhatIsDevNet = () => {
  const markdownFilePath = 'Certifications/Cisco/DevNet/Basics/ProgramOverview/WhatIsDevNet';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="What is DevNet?" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default WhatIsDevNet;
