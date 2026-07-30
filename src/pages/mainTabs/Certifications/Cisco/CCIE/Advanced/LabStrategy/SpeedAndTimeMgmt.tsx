import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/PageComponents/PageTitle';
import Notes from '@/components/PageComponents/Notes/Notes';

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
