import Link from 'next/link';
import Image from 'next/image'
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className='container'>
      <div className='flex flex-col space-y-14'>
        <header className='flex items-center justify-between py-4 border-b border-gray-100 dark:border-slate-800'>
          <Link href='/'>
            <b>Title here</b>
          </Link>

          <div>
            <Button>
              <Link href='/auth/sign-in'>
                Sign In
              </Link>
            </Button>
          </div>
        </header>

        <div className='flex flex-row justify-between items-center space-x-8'>
          <div className='flex-1'>
            <h1 className='text-4xl lg:text-6xl 2xl:text-7xl font-semibold text-left'>
              Title here
            </h1>

            <h2 className='text-lg xl:text-2xl text-gray-400 font-light'>
              <p>
                Some text here
              </p>

              <p>
                Try it out :)
              </p>
            </h2>
          </div>

          <div className='flex-1'>
            <Image
              src="/avatar.jpg"
              alt="Avatar"
              className="dark:invert"
              width={600}
              height={50}
              priority
            />
          </div>
        </div>

        <hr className='border-gray-100 dark:border-slate-800' />

        <div className='flex flex-col space-y-3'>
          <div className='flex space-x-2 justify-center'>
            <Button>
              <Link href='/auth/sign-up'>
                Create an Account
              </Link>
            </Button>

            <Button variant={'ghost'}>
              <Link href='/auth/sign-in'>
                Sign In
              </Link>
            </Button>
          </div>
        </div>

        <hr className='border-gray-100 dark:border-slate-800' />

        <div className='flex flex-col space-y-12'>
          <div className='flex flex-col space-y-2'>
            <h2 className='text-2xl font-semibold text-center'>
              Title Here
            </h2>

            <h3 className='text-lg text-center text-gray-400'>
              Some text here
            </h3>
          </div>
        </div>

        <hr className='border-gray-100 dark:border-slate-800' />

        <footer className='py-6'>
          <div className='flex flex-col space-y-4 lg:flex-row lg:space-y-0 justify-between'>
            <b>Title here</b>
            <div>
              Text here
            </div>

            <div className='flex space-x-4'>
              <Button variant='link'>
                <Link href='/auth/sign-in'>
                  Sign In
                </Link>
              </Button>

              <Button variant='link'>
                <Link href='/auth/sign-up'>
                  Create an Account
                </Link>
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
