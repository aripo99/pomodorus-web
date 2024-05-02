import Link from 'next/link';
import ProfileDropdown from '@/components/profile-dropdown';

function AppHeader() {
    return (
        <div className='p-4 border-b border-gray-40 dark:border-slate-800 flex justify-between items-center'>
            <Link href='/dashboard'>
                <b>Name Here</b>
            </Link>

            <ProfileDropdown />
        </div>
    )
}

export default AppHeader;