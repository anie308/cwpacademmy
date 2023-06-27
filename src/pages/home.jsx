import Layout from '../layout'
import HomeHero from '../components/home/home.hero'
import HomeActivities from '../components/home/home.activities'
import HomeSponsors from '../components/home/home.sponsors'
// import HomeExplore from '../components/home/home.explore'
import HomeTestimonials from '../components/home/home.testimonials'
import HomePrograms from '../components/home/home.programs'

function Home() {
  return (
    <Layout>
      <HomeHero/>
      <HomeSponsors/>
      <HomeActivities/>
      <HomePrograms/>
      {/* <HomeExplore/> */}
      <HomeTestimonials/>
    </Layout>
  )
}

export default Home