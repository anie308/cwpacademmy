import CourseList from "../../components/course/courseList.course"
import HeroCourse from "../../components/course/hero.course"
import Layout from "../../layout"

function CourseDetails() {
  return (
    <Layout>
      <HeroCourse/>
      <CourseList/>
    </Layout>
  )
}

export default CourseDetails