import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>QC Finds Extension</title>
        <meta name="description" content="QC Finds Extension - Terms of Service" />
      </Head>
      <main className="container">
        <div className="content">
          <h1>QC Finds Extension</h1>
          <p>Welcome to QC Finds Extension. Please review our Terms of Service.</p>
          <Link href="/legal" className="cta-button">
            View Terms of Service
          </Link>
        </div>
      </main>
    </>
  )
}
