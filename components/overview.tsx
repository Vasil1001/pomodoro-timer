/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable tailwindcss/classnames-order */
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ArrowUpFromLine, Clock, User } from 'lucide-react'
import { LineChartWeights } from './charts/LineChart'
import { TabsContent } from '@/components/ui/tabs'
import { GitBranchIcon } from './ui/icons/GitBranchIcon'
import PomodoroTimer from './pomodoro/PomodoroTimer'
import PinnedTips from './pomodoro/PinnedTips'

export function Dashboard() {
  return (
    <div className="flex max-h-screen w-full flex-col">
      <main className="flex flex-col gap-4 md:gap-5">
        <div className="mx-auto grid w-full max-w-xl gap-4 md:grid-cols-3">
          <div className="col-span-3 flex flex-col gap-5 mb-5">
            <PomodoroTimer />
            <PinnedTips />
          </div>
        </div>
      </main>
    </div>
  )
}
