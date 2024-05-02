import Link from 'next/link';
import EmailPasswordSignUpForm from './components/email-password-sign-up-form';

export const metadata = {
    title: 'Sign Up',
};

function SignUpPage() {
    return (
        <div className='flex flex-col space-y-4 w-full'>
            <EmailPasswordSignUpForm />

            <div className='text-sm'>
                <span>Already have an account?</span> <Link className='underline' href='/auth/sign-in'>Sign In</Link>
            </div>
        </div>
    );
}

export default SignUpPage;