---
layout: post
title:  "Sneaky Images"
date:   2013-10-06 23:49:11 -0700
categories: tricks
---

There is something wrong with this image. Can you tell me *what's*
wrong though?
![img](/assets/PichuFauxPass.png)

Go ahead, download it, inspect it, try to figure it out.
<!-- more -->

Give up yet?

Let me tell you what's wrong with it. It isn't just a PNG file, *it's a ZIP archive too.* Or rather, there is a ZIP file hidden inside of it, and some compression programs can understand it. No, really! Try to open it with 7-Zip or some similar program. You can really open it!

About now, I imagine you are thinking *"What is this wizardry?"* or *"How can that even work?"*... It's actually really quite simple. PNG is a format can ignore garbage at the end of a file, and ZIP programs can often ignore garbage at the beginning of ZIP archives. Why is this true? It's all in the formats.

PNG files contain image data, followed by an "End of image" token, a small string of characters that tells any program reading the PNG file that it is finished reading all that it should be interested in. ZIP files on the other hand, have a token at the *beginning* of their format. So, if we were to put a ZIP file at the end of a PNG file, we can assume that any program that understands to look beyond the beginning of the file for a ZIP archive can find any hidden archive no problem inside of a PNG without affecting the image.

Pretty nifty, huh?

Now that I've described what's happening in abstract, lets take a closer look at this Pichu Faux Pas by opening the file in Emacs...

![img](/assets/Pichumacs1.png)

As you can see at the bottom, I can look at this image as text by hitting *"C-c C-c"* (Or *Ctrl + C, Ctrl + C* for you non-Emacs folks.)
That gives you a textual view of the binary data like you would expect:

![img](/assets/Pichumacs2.png)

[According to Wikipedia](http://en.wikipedia.org/wiki/Portable_Network_Graphics#File_header), the header of a PNG file is as follows:

| Bytes    | Purpose                                                                                                                                                                         |
|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 89       | Has the high bit set to detect transmission systems that do not support 8 bit data and to reduce the chance that a text file is mistakenly interpreted as a PNG, or vice versa. |
| 50 4E 47 | In ASCII, the letters *PNG*, allowing a person to identify the format easily if it is viewed in a text editor.                                                                  |
| 0D 0A    | A DOS-style line ending (CRLF) to detect DOS-Unix line ending conversion of the data.                                                                                           |
| 1A       | A byte that stops display of the file under DOS when the command type has been used—the end-of-file character                                                                   |
| 0A       | A Unix-style line ending (LF) to detect Unix-DOS line ending conversion.                                                                                                        |


Now you can clearly see the "`\211PNG`" followed by a DOS-style line-ending... But this mode isn't terribly good at looking at binary data, so switching over to hexl-mode we see the following:

![img](/assets/Pichumacs3.png)

Now we can follow along with the format easily, I highlighted the "`89`" to show that the "`\211`" that we saw earlier is the character described by the Wikipedia table. You can even follow along the file with the header description. We see the "`89`" to start out with, followed by the "`50 4E 47`", which corresponds to the "`PNG`" text on the right of the hexl-mode window. You can continue doing this for the entire header... But why is this important?

Well, as it turns out, a little lower on the PNG Wikipedia article, it describes ["Critical Chunks"](http://en.wikipedia.org/wiki/Portable_Network_Graphics#Critical_chunks), things like the palette, dimenstions, bit depth, and most importantly, *the image end*. Below is a table of the critical chunks from Wikipedia.

| Chunk  | Purpose                                                                                                                                                                                                                                                                                  |
|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `IHDR` | must be the first chunk; it contains the image's width, height, and bit depth.                                                                                                                                                                                                           |
| `PLTE` | contains the palette; list of colors.                                                                                                                                                                                                                                                    |
| `IDAT` | contains the image, which may be split among mtabletiple IDAT chunks. Such splitting increases filesize slightly, but makes it possible to generate a PNG in a streaming manner. The IDAT chunk contains the actual image data, which is the output stream of the compression algorithm. |
| `IEND` | marks the image end.                                                                                                                                                                                                                                                                     |


There is a string in every PNG file to tell the program to stop reading the image file, and that string is "`IEND`". So, if we search for this string, we should have the end of the file, right?

![img](/assets/Pichumacs4.png)

*Right!*

One thing Wikipedia doesn't mention is that there are actually four bytes following the "`IEND`" before a PNG file ends. Those bytes are the "`ae42 6082`" bytes you see right after the "`IEND`".

But wait! Something's amiss here. Do you see it? There is more to the file after the PNG supposedly ended. Lets first isolate that data into another file so we can work with it.

![img](/assets/Pichumacs5.png)

That header looks familiar, but lucky for us, we don't need to memorize arbitrary header values when we have commands like "`file`" at our disposal. Lets see if it can tell us what kind of data we are working with...

![img](/assets/Pichumacs6.png)

Turns out, this is a ZIP file... The header for a ZIP file according to PKWare (The guys who made PKZIP) [is "`PK`"](http://www.pkware.com/documents/casestudies/APPNOTE.TXT) (Section 4.2.1). It all seems to check out. So lets save it as a zip file.

![img](/assets/Pichumacs7.png)

And open it...

![img](/assets/Pichumacs8.png)

What's this now?

![img](/assets/Pichumacs9.png)

Looks like we have a text file! Yes, a text file with text we could *totally* see in hexl-mode... But that's not the point.

The point is that we managed to utilize the specification for two different file formats to sneak one file into the other without damaging the original. You can mix lots of formats and get this result. Windows `.exe` files commonly have ZIP data inside of them. (Installers in particular utilize this one.) The result is that you have a valid executable that you can open in 7-Zip.

Now that you know about this spifftacular little hack, you are likely wondering how you can do it yourself. Good news! It's dead simple to mix different file formats if one can be placed right after the other like PNG and ZIP. You can do it on any platform too! You just need to know how to open a terminal or the Windows Command Prompt and use "`cat`" or "`copy`" respectively.

On Linux and Mac OSX, you can open a terminal and just put two files into the same file, one after the other with "`cat`"... You can do this by typing:

``` shell
cat image.png zipfile.zip > hax0rus.png
```

Windows has a slightly different method:

``` batch
copy image.png + zipfile.zip hax0rus.png
```

Of course you'll need to replace the .png and .zip filenames with the files you wanna mix.

By the way, you aren't limited to only putting one file after another. If you want to, you could possibly make valid files of a certain type with files in the *middle* of another. This technique is used more commonly than a lot of people think, so go ahead... Dig around files, look at specifications, and let your imagination wander with possible combinations.
