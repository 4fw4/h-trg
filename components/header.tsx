import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
      <div className="flex items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-bold">
            E
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Evade.ai
          </span>
        </Link>
      </div>
      <div className="flex items-center justify-end space-x-2">
        <Button variant="ghost" size="sm" className="hidden sm:flex">
          <span className="text-sm text-muted-foreground">
            Powered by Dolphin Mistral
          </span>
        </Button>
      </div>
    </header>
  )
}