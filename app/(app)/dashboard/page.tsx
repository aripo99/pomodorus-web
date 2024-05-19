import { ProgressBar } from './components/progress';
import TaskList from './components/task-list';

function DashboardPage() {
    return (
        <div className="flex flex-col space-y-4">
            <ProgressBar />
            <TaskList />
        </div>
    );
}

export default DashboardPage;