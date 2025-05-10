import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted/30 py-12 border-t border-border/20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Saddique Shah
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Frontend Developer & Web3 Enthusiast
            </p>
          </div>
          
          <div className="flex space-x-2">
            <SocialButton href="https://github.com/MuhammadSaddique" icon={<Github className="h-4 w-4" />} label="GitHub" />
            <SocialButton href="https://www.linkedin.com/in/muhammad-saddique-b03466232/" icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" />
            <SocialButton href="mailto:saddiqueshah588@gmail.com" icon={<Mail className="h-4 w-4" />} label="Email" />
            <SocialButton href="https://x.com/Saddique_Msd45?t=f7xhOXFb9cjLpwPlsKvNMQ&s=09" icon={<Twitter className="h-4 w-4" />} label="Twitter" />
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Muhammad Saddique Shah. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

type SocialButtonProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
};

function SocialButton({ href, icon, label }: SocialButtonProps) {
  return (
    <Button
      variant="outline"
      size="icon"
      asChild
      className="rounded-full h-9 w-9"
      aria-label={label}
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        {icon}
      </a>
    </Button>
  );
}