import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'Help with college applicatiion essay',
    message: `How to structure college essay?`
  },
  {
    heading: 'Help shortlisting colleges',
    message: 'Based on the preferences I enter shortlist 10 colleges: <ENTER YOU CRITERIA HERE EX: LOCATION, RANKING, PROGRAM ETC> \n'
  },
  {
    heading: 'Draft an essay',
    message: `Based on the following experiences write a rough draft for college admissions essay: \n`
  }
]

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">
          Welcome to Saval Seal AI Chatbot!
        </h1>
        <p className="mb-2 leading-normal text-muted-foreground">
          This AI chatbot app to help with college admissions. It is powered by GPT-3 and Next.js.
        </p>
        <p className="leading-normal text-muted-foreground">
          You can start a conversation here or try the following examples:
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
