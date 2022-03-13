import MainApp from './MainApp.jsx'


export const getStaticProps = async () => {
  const res = await fetch('https://api.jsonbin.io/b/622b9ff20618276743749675')
  const iconsData = await res.json()

  return {
    props: { iconsData },
  }
}

export default function Home({ iconsData }) {
  return (
    <>
      <MainApp iconsData={iconsData} />
    </>
  )
}
