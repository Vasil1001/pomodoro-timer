import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'

const defaultTips = [
  '🌞 Maximize productivity between 10am-12pm & 2-5pm',
  '💪 Tackle the hardest tasks first',
  '🌬️ Take deep breaths regularly',
  '🧘 Stretch, make calls, and get sunlight',
  '📝 Focus on one task at a time – avoid multitasking',
  '🚶 Move around every 50 minutes',
  '🙋 Ask for help when needed 🍏',
  '🍎 Enjoy healthy fruit snacks',
  '🎧 Listen to music and fidget to stay focused',
  '🚫 Minimize distractions for better concentration',
  '🏋️ Do weights or squats during breaks'
]

const emojis = [
  '💧',
  '🥗',
  '📞',
  '😊',
  '🌟',
  '🕒',
  '💤',
  '📚',
  '🖥️',
  '🍵',
  '🧃',
  '🧘‍♂️',
  '🧘‍♀️',
  '🚴',
  '🏃',
  '🧖',
  '🛌',
  '🧴',
  '🧼',
  '🧹',
  '🧺',
  '🧽',
  '🧯',
  '🧻',
  '🧷',
  '🧸',
  '🧩',
  '🧪',
  '🧫',
  '🧬',
  '🌿',
  '🌺'
]
export default function PinnedTips() {
  const [tips, setTips] = useState(defaultTips)
  const [newTip, setNewTip] = useState('')
  const [editIndex, setEditIndex] = useState<number | null>(null)
  const [selectedEmoji, setSelectedEmoji] = useState<string>('')

  const addTip = () => {
    if (newTip.trim()) {
      const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)]
      setTips([...tips, `${randomEmoji} ${newTip}`])
      setNewTip('')
    }
  }

  const removeTip = (index: number) => {
    setTips(tips.filter((_, i) => i !== index))
  }

  const startEditing = (index: number) => {
    setEditIndex(index)
    const [emoji] = tips[index].split(' ')
    setSelectedEmoji(emoji)
  }

  const saveEdit = (index: number) => {
    const updatedTips = [...tips]
    updatedTips[index] = `${selectedEmoji} ${tips[index].split(' ').slice(1).join(' ')}`
    setTips(updatedTips)
    setEditIndex(null)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Pinned Tips</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          {tips.map((tip, index) => (
            <li
              key={index}
              className="group mb-2 flex items-center justify-between rounded-md bg-[#19191f] p-1.5 hover:bg-[#19191f]/80">
              {editIndex === index ? (
                <>
                  <Dialog open={true} onOpenChange={() => setEditIndex(null)}>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Select an Emoji</DialogTitle>
                      </DialogHeader>
                      <div className="grid grid-cols-7 gap-2">
                        {emojis.map((emoji) => (
                          <button
                            key={emoji}
                            onClick={() => setSelectedEmoji(emoji)}
                            className={`rounded p-2 text-xl hover:bg-[#2e3039]/30 ${selectedEmoji === emoji ? 'bg-[#2e3039]' : ''}`}>
                            {emoji}
                          </button>
                        ))}
                      </div>
                      <Button onClick={() => saveEdit(index)}>Save</Button>
                    </DialogContent>
                  </Dialog>
                </>
              ) : (
                <>
                  <span>{tip}</span>
                  <div className="flex space-x-2">
                    <Button
                      variant="secondary"
                      onClick={() => startEditing(index)}
                      className="invisible px-2 group-hover:visible">
                      <i className="fas fa-pencil-alt">edit</i>
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={() => removeTip(index)}
                      className="invisible px-3 group-hover:visible">
                      X
                    </Button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex">
          <Input
            value={newTip}
            onChange={(e) => setNewTip(e.target.value)}
            placeholder="Add a new tip"
          />
          <Button onClick={addTip}>Add</Button>
        </div>
      </CardContent>
    </Card>
  )
}
