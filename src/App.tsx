import { useState } from 'react'
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
// import './App.css'
import { Button } from "@/components/ui/button"
import CodeComparison from "@/components/ui/code-comparison";
import { CoolMode } from "@/components/ui/cool-mode";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import SparklesText from "@/components/ui/sparkles-text";
import { DotPattern } from "@/components/ui/dot-pattern";
import {Component} from "@/components/Navbar"

function App() {
  const [count, setCount] = useState(0)
  const beforeCode = `import { NextRequest } from 'next/server';
 
  export const middleware = async (req: NextRequest) => {
    let user = undefined;
    let team = undefined;
    const token = req.headers.get('token');
   
    if(req.nextUrl.pathname.startsWith('/auth')) {
      user = await getUserByToken(token);
   
      if(!user) {
        return NextResponse.redirect('/login');
      }
    }
   
    if(req.nextUrl.pathname.startsWith('/team')) {
      user = await getUserByToken(token);
   
      if(!user) {
        return NextResponse.redirect('/login');
      }
   
      const slug = req.nextUrl.query.slug;
      team = await getTeamBySlug(slug);
   
      if(!team) {
        return NextResponse.redirect('/');
      }
    }
   
    return NextResponse.next();
  }
   
  export const config = {
    matcher: ['/((?!_next/|_static|_vercel|[\\w-]+\\.\\w+).*)'],
  };`;
  const afterCode = `import { createMiddleware, type MiddlewareFunctionProps } from '@app/(auth)/auth/_middleware';
  import { auth } from '@app/(auth)/auth/_middleware';
  import { team } from '@app/(team)/team/_middleware';
   
  const middlewares = {
    '/auth{/:path?}': auth,
    '/team{/:slug?}': [ auth, team ],
  };
   
  export const middleware = createMiddleware(middlewares);
   
  export const config = {
    matcher: ['/((?!_next/|_static|_vercel|[\\w-]+\\.\\w+).*)'],
  };`;

  return (
    // className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
    <main className="relative flex w-full flex-col items-center justify-center gap-8 overflow-hidden">
      <Component/>
      <DotPattern className="absolute inset-0 opacity-50"/>
      <SparklesText text="Vite + React;" />
      <div className="card">
        <CoolMode>
          <Button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
        </CoolMode>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <AnimatedGradientText>
        🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
          )}
        >
          Click on the Vite and React logos to learn more
        </span>
        <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </AnimatedGradientText>
      <CodeComparison
        beforeCode={beforeCode}
        afterCode={afterCode}
        language="typescript"
        filename="middleware.ts"
        lightTheme="github-light"
        darkTheme="github-dark"
      />
    </main>
  )
}

export default App
