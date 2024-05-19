"use client"

import * as React from "react"
import { CaretSortIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { useEffect } from "react"
import { listTasks } from "@/lib/actions/list-tasks"

export default function TaskList() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [tasks, setTasks] = React.useState<any[] | null>(null)

    useEffect(() => {
        const fetchCompletedToDos = async () => {
            const data: any = await listTasks();
            setTasks(data.data);
        }
        fetchCompletedToDos();
    }, []);

    return (
        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="space-y-2 pt-8 mx-6"
        >
            <div className="flex items-center justify-between">
                <h4 className="text-xl font-semibold text-center">
                    You&apos;ve cooked {tasks && tasks.length || 0} pizzas, keep going!
                </h4>
                <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm">
                        <CaretSortIcon className="h-4 w-4 " />
                        <span className="sr-only">Toggle</span>
                    </Button>
                </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="space-y-2">
                {tasks && tasks.map((task) => (
                    <div
                        key={task.id}
                        className={`rounded-md border px-4 py-2 font-mono text-sm shadow-sm flex items-center space-x-2 justify-between 
                    ${task.status === 'completed' ? 'border-green-700' : 'border-red-700'}`}
                    >
                        <span className={task.status === 'completed' ? 'line-through' : ''}>{task.title}</span>
                        <span className="text-xs font-semibold">{task.minutes > 1 ? `${task.minutes} minutes` : `${task.minutes} minute`}</span>
                    </div>
                )).reverse()}
            </CollapsibleContent>
        </Collapsible>
    )
}