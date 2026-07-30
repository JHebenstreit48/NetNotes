import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const BooksAndCourses = () => {
  const markdownFilePath = 'Certifications/Cisco/CCNP/Advanced/Resources/BooksAndCourses';

  return (
    <>
      <PageLayout>
        <PageTitle title="Books & Courses" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BooksAndCourses;
