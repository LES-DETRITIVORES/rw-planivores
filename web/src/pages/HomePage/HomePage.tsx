import { MetaTags } from '@redwoodjs/web'
const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <img
        src={'https://i.kym-cdn.com/photos/images/newsfeed/001/042/619/4ea.jpg'}
        alt="John Travolta"
        className="my-auto mx-auto rounded-xl mt-20"
      />
    </>
  )
}

export default HomePage
