import { openai } from '@ai-sdk/openai'
import { generateId } from 'ai'
import { createAI, getMutableAIState, streamUI } from 'ai/rsc'

// Configure OpenAI client for OpenRouter
const client = openai({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_BASE_URL || 'https://openrouter.ai/api/v1',
})

export async function submitUserMessage(content: string) {
  'use server'

  const aiState = getMutableAIState<typeof AI>()

  aiState.update({
    ...aiState.get(),
    messages: [
      ...aiState.get().messages,
      {
        id: generateId(),
        role: 'user',
        content
      }
    ]
  })

  let textStream: undefined | ReturnType<typeof createStreamableValue>
  let textNode: undefined | React.ReactNode

  const result = await streamUI({
    model: client(process.env.OPENAI_MODEL || 'cognitivecomputations/dolphin-mistral-24b-venice-edition:free'),
    initial: <SpinnerMessage />,
    system: `You are Evade.ai, an advanced AI assistant. Be helpful, accurate, and conversational.`,
    messages: [
      ...aiState.get().messages.map((message: any) => ({
        role: message.role,
        content: message.content,
        name: message.name
      }))
    ],
    text: ({ content, done, delta }) => {
      if (!textStream) {
        textStream = createStreamableValue('')
        textNode = <BotMessage content={textStream.value} />
      }

      if (done) {
        textStream.done()
        aiState.done({
          ...aiState.get(),
          messages: [
            ...aiState.get().messages,
            {
              id: generateId(),
              role: 'assistant',
              content
            }
          ]
        })
      } else {
        textStream.update(delta)
      }

      return textNode
    }
  })

  return {
    id: generateId(),
    display: result.value
  }
}