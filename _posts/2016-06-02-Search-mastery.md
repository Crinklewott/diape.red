---
layout: post
title:  "Search Mastery"
date:   2016-06-02 23:06:29 -0700
categories: browsers search trick
---

Believe it or not, there is a browser trick that can turn you from
your average browsing Joe into a wizardlike web-superperson! A
technique so ridiculously useful that I find it dumbfounding how it
has managed to escape widespread use despite being built into almost
every browser for the last decade.

![Gandalf the Grey-hat](/img/gandalf.jpg "Gandalf the Grey-hat")

> Pictured: A wizardlike web-superperson

I think the blame rests not on the feature, but on the hideously
boring name given to it: *"Keyword searching"*.

*Ugh!*

I bet you lost half your interest and almost want to stop reading this
post after seeing a name like that. *That's how bad it is.*

To make matters worse, for those few that get past the name, most
descriptions of it are *equally* bad. This is terrible because, as it
turns out, that "useless and boring" feature is actually a badass
piece of functionality that can genuinely improve the quality of your
life. This is because, truth be told, the way most people browse the
Internet can be described as inefficient at best, and at worst,
*painful, terrible*, and *oh dear lord help me*.

# Yeah yeah, spit it out already!

So, how does this stupidly-useful feature work?

I'll explain it in a sec, but first, I think we owe it to ourselves to
give the feature a better name, at least until you know what it
is. Let's call it "*address injection*" for now, because that's
actually how it works: by *injecting* things into *addresses*.

Now, now... I know what you are probably thinking...

> *"Ha! Silly Archenoth! I can put already put things into addresses."*

Right?

That might be true, but I believe a demonstration is in order... I
want *you*, (Yes! You, who is reading this!) to pull up the Wikipedia
article for "Corn".

Seems simple enough, right? I'm sure you could do it really fast, but
do me a favor and be sure to do it as fast as you can anyway! You can
use any means you want, and try as many times as you like. *How fast
can you do it?*

When you feel confident about your speed, click the video below to see
my attempt!

<video poster="/vid/CornPoster.png">
  <source src="/vid/corn.webm" type="video/mp4">
</video>
> Blink, and you'll miss it!

Including the time to load the page, even with my hideous
butterfingers, I went from 0 to Wikipeida in under 3 seconds! What you
saw there, was what we are calling "address injection".

*How did your best stack up?*

The cool thing (Well, *another* cool thing) is that I don't have to be
on a new tab, I can do this from *anywhere* with a few short
keystrokes. Also, this technique applies to more than just Wikipedia,
it applies to almost any kind of search! (And, oh my, so much more...)

# So... What did you do?

I did three things:

1. Highlighted the address bar
2. Typed "`w corn`"
3. Hit `[Enter]`

You might think three steps sounds like a lot. After all, people fit
hour-long presentations into 3-steps all the time... However, in
practice, these steps take less than a second more than how long it
would take you to type the search term on its own.

This is because the only real trick is highlighting the address bar
quickly--which you can do with `[Ctrl] + [L]`, by the way...

Go ahead, try it! Notice how it highlights the text of the bar? This
is actually really important, because it means the second you start
typing, it will replace the text.

Why does this matter?

Because, the first word you type into the address bar will be the
"*keyword*", the word that tells the browser where you want to
search. In the case of the above, that place was "Wikipedia", which I
triggered with "`w`".

That's why "`w corn`" meant "The Wikipedia page for Corn" to my
browser.

# So, lets get you hooked up!

I think it's about time for us to get you your very first keyword set
up! Excited? You should be!

How you set up keywords depends on your browser, so skip ahead to your
browser:

## Chrome

1. From the menu, go to `Settings` -> `Settings`.
2. Search for "`search`". (Holy redundancy, Batman)
3. Click "`Manage search engines...`".
4. Scroll to the very bottom, and add:

| Name        | Keyword | URL                                              |
|-------------+---------+--------------------------------------------------|
| `Wikipedia` | `w`     | `https://en.wikipedia.org/w/index.php?search=%s` |

## Firefox

1. Navigate to [Wikipedia's front page](https://www.wikipedia.org/).
2. `[Right Click]` the search bar.
3. Choose "`Add a Keyword for this Search...`".
4. Set the keyword to `w`, and click "`Ok`".

Alternatively, to add a URL yourself like in Chrome, bookmark it, then
set the keyword in the Bookmark manager! (Accessed with `[Ctrl] +
[Shift] + [O]`)

Clicking "`More`" on a bookmark will reveal the "`Keyword`" option.

# All set up?

In that case, try it out! Think of something to look up on
Wikipedia--anything you like. Now:

1. Hit `[Ctrl] + [L]`.
2. Type "`w <thing>`". (Replacing "`<thing>`" with your topic)
3. Hit `[Enter]`!

Cool right?

Though, I imagine about now you are probably annoyed that `[Ctrl] +
[L]` highlights the address bar for the **current** page. After all,
you were reading this, weren't you? Well, good news! Try the above
again, except this time with `[Ctrl] + [T]`!

You did the exact same thing, except, conveniently, before
highlighting the address bar, it opens a new tab for you!

That's a little better, yeah? Though you still have to find you way
**back** to this tab when you are done... Well, I have more good news!
Try that again, except when you are done, hit `[Ctrl] + [W]`!

Now you can, at a whim, get nearly instant information about
something, then jump back to where you were as soon as you are done.

Yeah! Now we're cookin'!

It may be a little bit to remember, but take a couple of seconds to
memorize those three shortcuts. They were:

| Shortcut       | Function                                                   |
|----------------+------------------------------------------------------------|
| `[Ctrl] + [L]` | Highlights the address bar in the *current* tab            |
| `[Ctrl] + [T]` | Highlights the address bar in a *new* tab                  |
| `[Ctrl] + [W]` | Closes the current tab, bringing you back to your last one |

# Expanding your collection

Wikipedia is cool and all, but what about that "*Pretty much all
searches*" thing I was talking about earlier? How does that work?

If you search something, chances are that you'll see it in the address
of the page. That's why this trick works.

![The URL, with the query visible in it](/img/IAMHEREKeywords.png "Horton hears a search.")

Remember that Wikipedia URL I gave you earlier?

It was: `https://en.wikipedia.org/w/index.php?search=%s`

Notice the "`%s`" at the end?

How keywords work, is they replace the "`%s`" in their target URL
whatever you type *after* them. So, when you typed "`w <thing>`", that
was actually making the URL look like:
`https://en.wikipedia.org/w/index.php?search=<thing>`

So that means, from this Google page, in order to turn it into a
keyword URL, all we have to do it replace the query with "`%s`".

![The URL, with the query replaced with "%s"](/img/IAMHEREReplaced.png "Horton hears a %s.")

So, with that newly created URL, we can create a keyword for it with
the steps [above!](#so-lets-get-you-hooked-up)

Since creating a keyword takes a little bit of time, I'll give you
some keywords for some common sites so you don't need to go through
the above for them:

| Site               | URL                                                 |
|--------------------+-----------------------------------------------------|
| *Facebook*         | `https://www.facebook.com/search/top/?q=%s`         |
| *Google Define*    | `http://google.com/search?q=define:%s`              |
| *Google Maps*      | `http://maps.google.com/maps?q=%s`                  |
| *Twitter*          | `https://twitter.com/search?q=%s`                   |
| *Urban Dictionary* | `http://www.urbandictionary.com/define.php?term=%s` |
| *YouTube*          | `http://www.youtube.com/results?search_query=%s`    |

Practice with these for a little bit, and if you are feeling
adventurous, make a few of your own, experiment a little, but most of
all, have fun with it! These may be tools, but that doesn't mean it
doesn't feel amazing to be able to jump around the internet so
effortlessly.

If you get to the point where you use these without thinking about it,
congratulations! *You are now one of the elite*; you can now pull up
information faster than almost anyone who uses the web.

That wasn't so hard, yeah? But guess what! There's so much more to
keywords then that. (It's safe to go back to their real name now that
you know what they are.)

Interested? Then read on, and elevate yourself from a little bit of
search magic to the truly arcane!

# Searching for Black Belts

I imagine keywords are starting to make a bit more sense now, huh?
Though what I haven't told you is that there is a type of search many
times cooler than anything we've seen so far: *The URL keyword!*

These are keywords that accept other addresses, and they are amazing
because they can be used on anything you see in your browser! Images,
web pages, you name it!

Using these special keywords, you can find information about images,
translate web pages, and even read things that have supposedly stopped
existing...

For example, if I wanted to know what this image was of, what could I
do here? Click and find out!

<video poster="/vid/Keybindings.png">
  <source src="/vid/Keybindings.webm" type="video/mp4">
</video>

> Easiest mystery ever!
