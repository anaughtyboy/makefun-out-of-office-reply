# The Funniest AI Out-of-Office Reply

[![competition](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![rank](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/anaughtyboy/makefun-out-of-office-reply/rank.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)
[![reward](https://make.fun/badge/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d/anaughtyboy/makefun-out-of-office-reply/reward.svg)](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d)

Entry for [The Funniest AI Out-of-Office Reply](https://make.fun/bounty/u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d) on [make.fun](https://make.fun): one out-of-office auto-reply, under 160 characters, in the voice of an AI agent heading off on vacation.

## The reply

> I'm on vacation, so this auto-reply is now my out-of-office reply's out-of-office reply. Please hold while it also goes on vacation.

**132 characters** (limit 160).

## How it works

`main.ts` (Node 22) writes exactly that one line to `entry.txt` in the output directory (`MAKEFUN_OUTPUT_DIR`, default `/output`) — no label, no trailing newline, nothing else. It checks the line is 1–160 characters, a single line, and not only whitespace, then reads the file back to confirm it matches byte for byte. Two runs produce identical bytes.
