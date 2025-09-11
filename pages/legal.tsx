import Head from 'next/head'
import Link from 'next/link'

export default function Legal() {
  return (
    <>
      <Head>
        <title>Terms of Service - QC Finds Extension</title>
        <meta name="description" content="Terms of Service for QC Finds Extension" />
      </Head>
      <main className="legal-page">
        <div className="container">
          <div className="legal-content">
            <header className="legal-header">
              <h1>Terms of Service</h1>
              <p className="last-updated">Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</p>
            </header>

            <div className="legal-body">
              <section className="legal-section">
                <h2>5. Data Processing</h2>
                <p>
                  The Extension analyzes a selection of visited pages locally to detect product links.
                </p>
                <p>
                  Local storage (e.g. chrome.storage) may be used to save your preferences.
                </p>
              </section>

              <section className="legal-section">
                <h2>6. Intellectual Property</h2>
                <p>
                  The Extension&apos;s code, design, and assets are our property. Third-party content (e.g. QC images, logos) remains the property of their respective owners and is only displayed or linked as technically necessary.
                </p>
              </section>

              <section className="legal-section">
                <h2>7. Prohibited Activities</h2>
                <p>You agree not to:</p>
                <ul>
                  <li>Mass scrape or overload third-party servers.</li>
                  <li>Use the Extension to infringe intellectual property, circumvent platform rules, or violate applicable laws.</li>
                  <li>Manipulate or interfere with the Extension&apos;s code, distribution, or operation.</li>
                </ul>
              </section>

              <section className="legal-section">
                <h2>8. Updates & Support</h2>
                <p>
                  We may update, modify, or discontinue the Extension at any time. Terms may also change. The &quot;Last updated&quot; date will reflect revisions.
                </p>
              </section>

              <section className="legal-section">
                <h2>9. Disclaimer of Warranties</h2>
                <p>
                  The Extension is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind. We do not guarantee error-free operation, continuous availability, or accuracy of displayed content. Use at your own risk.
                </p>
              </section>

              <section className="legal-section">
                <h2>10. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, or consequential damages (including lost profits, data loss, or service interruption) arising from the use of the Extension.
                </p>
              </section>

              <section className="legal-section">
                <h2>11. Indemnification</h2>
                <p>
                  You agree to indemnify and hold us harmless against claims, damages, or costs arising from your unlawful or unauthorized use of the Extension.
                </p>
              </section>

              <section className="legal-section">
                <h2>12. Termination</h2>
                <p>
                  We may suspend or terminate your access at any time if you violate these Terms. You may stop using the Extension at any time by uninstalling it.
                </p>
              </section>

              <section className="legal-section">
                <h2>13. Contact</h2>
                <p>
                  Questions about these Terms may be directed to:
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
