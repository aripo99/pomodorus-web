import Link from 'next/link';
import ProfileDropdown from '@/components/profile-dropdown';

function AppHeader() {
    return (
        <div className='border-b border-gray-40 dark:border-slate-800 flex justify-between items-center'>
            <Link href='/dashboard'>
                <b>Pomodorus</b>
            </Link>

            <ProfileDropdown />
        </div>
    )
}

export default AppHeader;