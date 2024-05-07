"use client"

import React, { useState, useEffect } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export function ProgressBar() {
    const [task, setTask] = useState('');
    const [minutes, setMinutes] = useState(25);
    const [remainingTime, setRemainingTime] = useState(1500); // 25 minutes * 60 seconds
    const [timerActive, setTimerActive] = useState(false);

    useEffect(() => {
        let interval: undefined | number | NodeJS.Timeout = undefined;
        if (timerActive && remainingTime > 0) {
            interval = setInterval(() => {
                setRemainingTime((time) => time - 1);
            }, 1000);
        } else if (!timerActive && remainingTime !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [timerActive, remainingTime]);

    const toggleTimer = () => {
        setRemainingTime(minutes * 60);
        setTimerActive((active) => !active);
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        return `${minutes} minutes remaining`;
    };

    return (
        <main className="flex flex-col items-center justify-center ">
            <div className="max-w-md w-full space-y-6 px-4">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Pomodoro Timer</h1>
                    <p className="text-gray-500 dark:text-gray-400">Focus on your tasks and start cooking</p>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="task">What are you working on?</Label>
                        <Input id="task" placeholder="Enter your task" value={task} onChange={(e) => setTask(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="minutes">How many minutes?</Label>
                        <Input id="minutes" placeholder="Enter minutes" type="number" value={minutes} onChange={(e) => setMinutes(e.target.value)} />
                    </div>
                </div>
                <div className="text-center">
                    <Progress value={remainingTime / (minutes * 60) * 100} />
                    <p className="mt-2"> {formatTime(remainingTime)} </p>
                </div>
                <div className="flex justify-center">
                    <Button className="w-full max-w-[200px]" id="start-timer" onClick={toggleTimer}>
                        {timerActive ? "Stop Timer" : "Start Timer"}
                    </Button>
                </div>
            </div>
        </main>
    );
}
