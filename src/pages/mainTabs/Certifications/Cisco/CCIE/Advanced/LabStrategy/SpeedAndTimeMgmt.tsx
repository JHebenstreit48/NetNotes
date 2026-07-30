import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SpeedAndTimeMgmt = () => {
  const markdownFilePath = 'Certifications/Cisco/CCIE/Advanced/LabStrategy/SpeedAndTimeMgmt';

  return (
    <>
      <PageLayout>
        <PageTitle title="Speed & Time Mgmt" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SpeedAndTimeMgmt;
