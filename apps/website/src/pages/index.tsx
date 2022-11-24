import Head from 'next/head'
import Link from 'next/link'
import { Button, Container } from '@elementail/core'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Elementail - Just another UI Kit using Tailwind CSS</title>
        <meta name='description' content='Just another UI Kit using Tailwind CSS' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8'>
        <h1 className='mx-auto max-w-5xl text-center text-6xl font-extrabold leading-[1.1] tracking-tighter text-white sm:text-7xl lg:text-8xl xl:text-8xl'>
          <span className='inline-block bg-gradient-to-r from-accent-500 to-brand-500 bg-clip-text text-transparent'>
            Elementail
          </span>{' '}
          UI
        </h1>
        <div className='mx-auto mt-5 max-w-xl sm:flex sm:justify-center md:mt-8'>
          <div className='rounded-md'>
            <Link href='https://github.com/riipandi/elementail'>
              <Button className='flex w-full items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white no-underline hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-300 md:py-3 md:px-10 md:text-lg md:leading-6'>
                Read the docs
                <span className='ml-2 bg-gradient-to-r from-accent-500 to-brand-500 bg-clip-text text-transparent'>
                  →
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </Container>
  )
}
