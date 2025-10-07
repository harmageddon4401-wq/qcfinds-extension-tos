import Head from 'next/head'
import Link from 'next/link'

export default function Legal() {
  return (
    <>
      <Head>
        <title>Privacy Policy - QCFinds Chrome Extension</title>
        <meta name="description" content="Privacy Policy for the QCFinds Chrome Extension" />
      </Head>
      <main className="legal-page">
        <div className="container">
          <div className="legal-content">
            <header className="legal-header">
              <h1>Privacy Policy – QCFinds Chrome Extension</h1>
              <p className="last-updated">Last updated: September 2025</p>
            </header>

            <div className="legal-body">
              <section className="legal-section">
                <h2>1. Overview</h2>
                <p>
                  The QCFinds Chrome Extension is designed solely to enhance the shopping experience on agent websites by providing easy access to QC (Quality Control) photos and agent comparison tools for Chinese shopping platforms such as Taobao, Weidian, and 1688.
                </p>
              </section>

              <section className="legal-section">
                <h2>2. Data Collection</h2>
                <p>
                  This extension collects the following types of user data strictly for the purpose of providing its core functionality:
                </p>
                <ul>
                  <li>
                    <strong>Web logs:</strong> Information about visited pages on supported agent websites, including page titles and timestamps.
                  </li>
                  <li>
                    <strong>Website content:</strong> Text, images, and links from agent product pages for displaying QC photos and populating selection popups.
                  </li>
                  <li>
                    <strong>User activity:</strong> Interaction data such as button clicks, selections of agents, and QC popup usage to ensure correct functionality.
                  </li>
                </ul>
              </section>

              <section className="legal-section">
                <h2>3. Permissions Justification</h2>
                <ul>
                  <li>
                    <strong>activeTab:</strong> Required to extract product IDs from URLs and insert QC buttons on agent pages.
                  </li>
                  <li>
                    <strong>storage:</strong> Used to save user preferences like default agent selection, notification settings, and basic usage statistics.
                  </li>
                  <li>
                    <strong>tabs:</strong> Required to open agent websites in new tabs when users select different shopping agents.
                  </li>
                  <li>
                    <strong>Host permissions:</strong> Access to specific agent websites (joyagoo.com, cnfans.com, mulebuy.com, etc.) and api.qcfinds.xyz to fetch QC photos.
                  </li>
                  <li>
                    <strong>scripting:</strong> Required to inject QC buttons and agent selection popups into supported agent websites.
                  </li>
                  <li>
                    <strong>notifications:</strong> Used to inform users when QC photos are loaded, agent redirections succeed, or errors occur.
                  </li>
                </ul>
              </section>

              <section className="legal-section">
                <h2>4. Use of Data</h2>
                <p>The collected data is used solely to:</p>
                <ul>
                  <li>Display QC photos on agent product pages.</li>
                  <li>Enable agent comparison and selection features.</li>
                  <li>Provide notifications about QC status and errors.</li>
                </ul>
                <p>
                  No personal data is sold, shared, or used for purposes unrelated to the extension’s core functionality. User data is not used to determine creditworthiness or for loan purposes.
                </p>
              </section>

              <section className="legal-section">
                <h2>5. Remote Code</h2>
                <p>
                  This extension does not use remote code. All scripts and functionality are included within the extension package itself.
                </p>
              </section>

              <section className="legal-section">
                <h2>6. Third Parties</h2>
                <p>
                  We do not transfer or sell user data to third parties except in cases where it is necessary to deliver the core functionality of the extension (e.g., fetching QC images from joyagoo.com, etc.).
                </p>
              </section>

              <section className="legal-section">
                <h2>7. Contact</h2>
                <p>
                  If you have any questions about this Privacy Policy or data handling, please contact us at:
                </p>
                <p className="contact-info">
                  <a href="mailto:harmageddon4401@gmail.com">harmageddon4401@gmail.com</a>
                </p>
              </section>
            </div>

            <footer className="legal-footer">
              <Link href="/" className="back-link">
                ← Back to Home
              </Link>
            </footer>
          </div>
        </div>
      </main>
    </>
  )
}
