---
layout: post
title: "Mass Rename"
date: 2017-07-10 18:21:03 -0700
categories: emacs
series: "Arsenal-tier Emacs:"
---

Lets rename a folder of annoying Twitter `.jpg-orig` files to what they should be--and lets do it in less than five seconds!

![Renaming of an entire folder in no time at all](/assets/Mass-Rename.gif "Beep boop, renamed!")

<!-- more -->

# What's this?
In the GIF at the top, you can see an entire folder get renamed
seemingly instantly. What's happening here is the handywork of a
little Emacs tool called "Dired", Emacs' built-in file manager.

Now, Emacs having a built-in-file manager is about as surprising as
the ocean being wet, but it has some really cool features that are a
lot less obvious. The one we are interested in is the part where Dired
allows you to edit folders as if they were text files!

Because of this, all I did above was simply find and replace "`-orig`"
with nothing, then save. Simple as that!

![Find and replace](/assets/Dired-Rename.gif "It's all text!")

# How can I do this too?
In Emacs, `C-x C-f` [^1] lets you open files and folders... And when you
open a folder, you are placed in "Dired"; the mode you saw me use
above.

![Navigating a folder in Dired](/assets/Dired1.png "Welcome to Dired!")

By default, Dired is read-only to stop you from making sweeping
changes to your folders (Imagine running across this without knowing
what you're doing!), but you can turn that off with `C-x C-q`,
allowing you to perform all kinds of magic.

When you do this, it indicates so in the bottom line.

![The bottom line shows you can edit!](/assets/Dired2.png "Uh oh")

After that, you can edit the folder as if it were a text file, using
whatever style of editing you prefer. When you are done, you can save
your changes to the folder by simply saving the buffer as if it were a
normal text file--or by hitting `C-c C-c` like the text at the bottom
suggests.

![Modifications!](/assets/Dired3.png "Macros work really nicely here too!")

...and that's it! Now you wield the power of mass-renaming!

[^1]: `C-x C-f` is Emacs-speak for `[Ctrl] + [X]`, then `[Ctrl] + [F]`.
