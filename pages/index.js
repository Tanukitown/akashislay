import Head from 'next/head'
import Header from '@components/Header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Akashislay</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <marquee><h5>There is no such thing as a coincidence</h5></marquee>
        <img src="https://cdn.discordapp.com/attachments/959857101860122646/1264724381980954705/SPOILER_gotchya.png?ex=66f2a11e&is=66f14f9e&hm=400ad68992911063226af555ea321d95012c63a69e391278d72db520423d89cb&" />
      </main>
    </div>
  )
}
