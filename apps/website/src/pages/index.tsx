import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2'>
      <Head>
        <title>Elementail - Just another UI Kit using Tailwind CSS</title>
        <meta name='description' content='Just another UI Kit using Tailwind CSS' />
        <meta http-equiv="refresh" content="0; URL=https://twistail.com/" />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8'>
        <h1 className='mx-auto max-w-5xl text-center text-6xl font-extrabold leading-[1.1] tracking-tighter text-white sm:text-7xl lg:text-8xl xl:text-8xl'>
          <span className='from-secondary-500 to-primary-500 inline-block bg-gradient-to-r bg-clip-text text-transparent'>
            Elementail
          </span>{' '}
          UI
        </h1>
        <div className='mx-auto mt-8 max-w-xl sm:flex sm:justify-center md:mt-12 lg:mt-16'>
          <div className='flex space-x-4'>
            <Link
              href='https://twistail.com'
              target='_blank'
              rel='noreferrer noopener'
            >
              <button className='flex w-full items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white no-underline hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-300 md:py-3 md:px-10 md:text-lg md:leading-6'>
                Read the docs
                <span className='from-secondary-500 to-primary-500 ml-2 bg-gradient-to-r bg-clip-text text-transparent'>
                  →
                </span>
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
