import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Heading from '@theme/Heading'
import Layout from '@theme/Layout'
import clsx from 'clsx'
import type { ReactNode } from 'react'

import styles from './index.module.css'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/unterlagen/intro"
          >
            Zu den Unterlagen
          </Link>
          <Link
            className="button button--primary button--lg"
            to="/berichte"
            style={{ marginLeft: '1rem' }}
          >
            Berichte lesen
          </Link>
        </div>
      </div>
    </header>
  )
}

function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon: string
}) {
  return (
    <div className="col col--4">
      <div
        className="card shadow--md margin-bottom--lg padding--lg"
        style={{ height: '100%' }}
      >
        <div className="text--center">
          <div style={{ fontSize: '3rem' }}>{icon}</div>
        </div>
        <div className="text--center margin-top--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

function HomepageContent() {
  return (
    <>
      <section
        className="padding-vert--xl"
        style={{ backgroundColor: 'var(--ifm-color-emphasis-100)' }}
      >
        <div className="container">
          <div className="row">
            <div className="col col--8 col--offset-2 text--center">
              <Heading as="h2" className="margin-bottom--md">
                Willkommen im digitalen Dorfarchiv Rössing
              </Heading>
              <p className="hero__subtitle">
                Rössing ist ein Dorf in der Gemeinde Nordstemmen im Landkreis
                Hildesheim. Dieses digitale Archiv bewahrt die Geschichte und
                Geschichten unseres Dorfes für kommende Generationen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="padding-vert--xl">
        <div className="container">
          <div className="row">
            <FeatureCard
              icon="📚"
              title="Unterlagen durchstöbern"
              description="Historische Dokumente, Fotografien und Materialien zur Dorfgeschichte digital aufbereitet und leicht zugänglich."
            />
            <FeatureCard
              icon="📝"
              title="Berichte lesen"
              description="Geschichten, Chroniken und Berichte über das Leben im Dorf – von historischen Ereignissen bis zu aktuellen Entwicklungen."
            />
            <FeatureCard
              icon="🤝"
              title="Erinnerungen teilen"
              description="Tragen Sie eigene Beiträge zur Dorfgeschichte bei und helfen Sie mit, unser kollektives Gedächtnis zu bewahren."
            />
          </div>
        </div>
      </section>

      <section
        className="padding-vert--xl"
        style={{ backgroundColor: 'var(--ifm-color-emphasis-100)' }}
      >
        <div className="container">
          <div className="row">
            <div className="col col--10 col--offset-1 text--center">
              <Heading as="h2" className="margin-bottom--lg">
                Ziel des Archivs
              </Heading>
              <div className="avatar avatar--vertical margin-bottom--lg">
                <div className="avatar__intro">
                  <p className="hero__subtitle">
                    Unser Ziel ist es, die reichhaltige Geschichte Rössings zu
                    dokumentieren und zugänglich zu machen. Von alten
                    Fotografien über Zeitungsartikel bis hin zu persönlichen
                    Erinnerungen – jedes Dokument trägt dazu bei, das kollektive
                    Gedächtnis unseres Dorfes zu bewahren.
                  </p>
                </div>
              </div>
              <div className="margin-top--lg">
                <Link
                  className="button button--primary button--lg"
                  to="/unterlagen/intro"
                >
                  Mehr erfahren
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default function Home(): ReactNode {
  return (
    <Layout
      title={`Willkommen`}
      description="Digitales Dorfarchiv Rössing - Geschichte und Geschichten aus Rössing bewahren"
    >
      <HomepageHeader />
      <main>
        <HomepageContent />
      </main>
    </Layout>
  )
}
