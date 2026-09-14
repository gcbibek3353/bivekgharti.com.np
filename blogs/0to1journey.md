# My Software Development Journey: 0 → 1

I started learning programming seriously in the first year of college.

At that time, coding agents like Cursor, Codex, or Claude Code didn't exist in the way they do today. We had ChatGPT, but it was nowhere near as capable as it is now.

So, most of my learning came from **YouTube tutorials**.

I remember watching entire playlists of **50–60 videos just to learn React**. After finishing them, I genuinely felt like I understood most of React.

Then I opened my editor and realized:

> I couldn't actually write anything myself.

That was one of the first important lessons I learned about programming: **watching someone write code is not the same as being able to write code.**

---

## The Documentation Problem

I kept hearing experienced developers say:

> "Learn from the docs."

So I tried.

Honestly, I couldn't understand much from them.

Every page seemed to link to another page, which linked to another concept, and suddenly I was ten tabs deep trying to understand something that seemed simple in a YouTube video.

I eventually realized that documentation isn't necessarily a teaching resource for someone who knows nothing. It's often a **reference for someone who already understands the underlying concepts**.

That distinction changed how I approached learning.

---

## Harkirat's Cohort 2.0

Then I came across **Harkirat Singh's Cohort 2.0**.

Buying that course was probably one of the best decisions I made during my learning journey.

I wouldn't recommend the cohort as a starting point for a complete beginner. But because I had already spent a lot of time learning from YouTube, I had enough context to follow it.

A huge portion of my programming knowledge came from that cohort.

But the biggest thing I learned wasn't a particular programming language, framework, or technology.

I learned **how to learn**.

How to approach an unfamiliar technology.

How to read code.

How to build things instead of just watching someone else build them.

How different pieces of software actually fit together.

That skill has stayed with me much longer than any particular framework.

---

## Before Coding Agents

Before coding agents became good enough to actually work with a codebase, a huge amount of my time went into things that, in hindsight, weren't particularly valuable.

I could spend **hours debugging a tiny syntax error**.

Writing UI with Tailwind was especially frustrating.

I'd know exactly what I wanted the interface to look like, but getting the spacing, alignment, responsiveness, and small details right could take forever.

The problem wasn't always that the task was difficult.

A lot of the time, it was simply **time-consuming**.

---

## The First Phase of AI-Assisted Development

Then I started using ChatGPT heavily.

At first, my workflow was basically:

**Copy file → paste into ChatGPT → explain problem → get answer → copy code back.**

Sometimes it worked surprisingly well.

Other times, it confidently suggested APIs, functions, or solutions that simply didn't exist.

Still, it was useful.

Then I started using **GitHub Copilot**.

This was different.

For the first time, I had an AI that actually had some understanding of the code I was working on instead of requiring me to constantly copy and paste context into a browser.

That changed my workflow.

I could ask simple questions without leaving my editor, and autocomplete became genuinely useful.

But there was still a clear limitation:

**I didn't trust it with complex problems.**

I used AI to assist me, but I was still the one writing the actual code.

---

## Cursor Changed My Perspective

Then I got the paid version of **Cursor**.

This was probably the biggest shift in my perception of AI coding.

Before Cursor, my mindset was:

> "AI can help me write code."

After using Cursor extensively, it became:

> "AI can sometimes write this code better and faster than I can."

That was a very different realization.

Tasks that previously took hours could sometimes be completed in minutes.

Refactoring.

Boilerplate.

Debugging.

Implementing features across multiple files.

Writing UI.

Understanding unfamiliar code.

I started using AI much more frequently—not because I stopped understanding code, but because I realized that **writing every line manually wasn't necessarily the best use of my time**.

---

## Experimenting With Different Models

After that, I started experimenting with different models and tools.

I used **GLM models for a few months through the Kilo Code VS Code extension**, and I was genuinely impressed by how capable they had become.

Then I started using **Claude Code**.

And once again, my understanding of coding agents changed.

What impressed me wasn't simply that it could generate code.

It could take a relatively complex task, break it into smaller pieces, inspect the codebase, modify multiple files, use tools, reason through problems, and iterate toward a solution.

With things like **skills, sub-agents, MCPs, and tool integrations**, coding agents are starting to look much less like autocomplete and much more like actual development systems.

---

# What I Think About AI-Assisted Development Today

There is something fascinating happening right now.

Someone with relatively little software development experience can use modern coding agents to build and ship a surprisingly complete MVP.

A few years ago, that would have required significantly more technical knowledge and time.

But there is a catch.

**The real difficulty starts when real users arrive.**

An MVP can work perfectly with ten test users.

Then suddenly you have:

* unexpected user behavior
* security issues
* race conditions
* bad database queries
* poor observability
* infrastructure problems
* edge cases
* inconsistent data
* scaling problems
* unclear business requirements
* failures you never considered

And that's where I started realizing something much more important.

---

# Writing Code Is Only Part of Software Engineering

At some point, I started seeing software development differently.

**Writing code is only a small part of building software.**

You need to understand the actual problem.

You need to figure out what users really need—not just what they asked for.

You need to make trade-offs.

You need to think about failure cases.

You need to understand the existing system.

You need to know when an implementation is good enough and when it will become a problem later.

And most importantly, you need to be able to **reason about the system you're building**.

AI can generate a lot of code.

But if you don't understand the problem, you can simply generate a lot of wrong code much faster.

---

# My Takeaway

My journey from 0 → 1 has gone through a few very different phases:

**YouTube → Cohort → Documentation → Projects → ChatGPT → Copilot → Cursor → Open-source models → Claude Code**

Each phase changed how I learned and how I built software.

And I don't think AI-assisted development is making software engineering irrelevant.

I think it's changing **where the difficulty lies**.

The barrier to **shipping an MVP** is becoming dramatically lower.

The barrier to **building reliable production software** is still high.

Maybe even higher in some ways, because now the ability to generate code is no longer the bottleneck.

The bottleneck is increasingly:

> **Understanding the problem, making the right decisions, and knowing whether the code being generated is actually good.**

### TL;DR

**AI is incredible for learning, experimenting, and shipping MVPs.**

But production software still requires deep understanding of systems, business requirements, security, reliability, infrastructure, and the consequences of your technical decisions.

**The code is getting cheaper.
Good engineering isn't.**
