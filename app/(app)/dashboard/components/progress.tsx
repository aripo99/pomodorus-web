"use client"

import React, { useState, useEffect } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function ProgressBar() {
    const [task, setTask] = useState('');
    const [minutes, setMinutes] = useState(25);
    const [remainingTime, setRemainingTime] = useState(1500); // 25 minutes * 60 seconds
    const [timerActive, setTimerActive] = useState(false);

    useEffect(() => {
        let interval = null;
        if (timerActive && remainingTime > 0) {
            interval = setInterval(() => {
                setRemainingTime((time) => time - 1);
            }, 1000);
        } else if (!timerActive && remainingTime !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [timerActive, remainingTime]);

    const startTimer = () => {
        setRemainingTime(minutes * 60);
        setTimerActive(true);
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
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
                <div className="relative w-full max-w-xs mx-auto">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl font-bold text-gray-900 dark:text-gray-100">
                            <span id="remaining-time">{formatTime(remainingTime)}</span>
                        </div>
                    </div>
                    <div className="relative w-full h-0 pb-[100%] rounded-full bg-gradient-to-r from-primary to-primary/50 overflow-hidden">
                        <div
                            className="absolute inset-0 bg-gray-200 dark:bg-gray-800 transition-all duration-[1500ms] ease-linear"
                            id="timer-progress"
                            style={{ transform: `scaleY(${1 - remainingTime / (minutes * 60)})` }}
                        />
                    </div>
                </div>
                <div className="flex justify-center">
                    <Button className="w-full max-w-[200px]" id="start-timer" onClick={startTimer}>
                        Start Timer
                    </Button>
                </div>
            </div>
        </main>
    );
}
