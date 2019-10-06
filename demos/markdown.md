# Markdown: Syntax

*   [Overview](#overview)
    *   [Philosophy](#philosophy)
    *   [Inline HTML](#html)
    *   [Automatic Escaping for Special Characters](#autoescape)
*   [Block Elements](#block)
    *   [Paragraphs and Line Breaks](#p)
    *   [Headers](#header)
    *   [Blockquotes](#blockquote)
    *   [Lists](#list)
    *   [Code Blocks](#precode)
    *   [Horizontal Rules](#hr)
*   [Span Elements](#span)
    *   [Links](#link)
    *   [Emphasis](#em)
    *   [Code](#code)
    *   [Images](#img)
*   [Miscellaneous](#misc)
    *   [Backslash Escapes](#backslash)
    *   [Automatic Links](#autolink)


**Note:** This document is itself written using Markdown; you
can [see the source for it by adding '.text' to the URL](/projects/markdown/syntax.text).

----

## Block Elements

### Paragraphs and Line Breaks

A paragraph is simply one or more consecutive lines of text, separated
by one or more blank lines.
(When you *do* want to insert a `<br />` break tag using Markdown, you
end a line with two or more spaces, then type return.)


### Headers

Markdown supports two styles of headers, [Setext] [1] and [atx] [2].

Optionally, you may "close" atx-style headers. This is purely
cosmetic -- you can use this if you think it looks better. The
closing hashes don't even need to match the number of hashes
used to open the header. (The number of opening hashes
determines the header level.)


### Blockquotes

> Markdown uses email-style `>` characters for blockquoting. It looks
> best if you hard wrap the text and put a `>` before every line:

> Markdown allows you to be lazy and only put the `>` before the first
line of a hard-wrapped paragraph:

> Blockquotes can be nested (i.e. a blockquote-in-a-blockquote)
 > > byadding additional levels of `>`


### Lists

Markdown supports ordered (numbered) and unordered (bulleted) lists.
Unordered lists use asterisks, pluses, and hyphens

*   Red
+   Green
-   Blue

Ordered lists use numbers followed by periods:

1.  actual numbers you use to mark the list
2.  have no effect on the HTML output
3.  Markdown produces

1.  numbers
1.  do not
1.  matter


*   To make lists look nice,
    you can wrap items with
    hanging indents.

+   List items may consist of multiple paragraphs. 

    Each subsequent paragraph in a list item must be indented
    by either 4 spaces
    or one tab:

2.  Suspendisse id sem consectetuer libero luctus adipiscing.

*   To put a blockquote within a list item, 

    > the blockquote's `>` delimiters need to be indented:
    > inside a list item.

*   To put a code block within a list item, 

*   A list item with a code block:

        the code block needs
        to be indented *twice* -- 8 spaces or two tabs:


### Code

Wrap code  with `backtick` quotes (`` ` ``)


#### Code Block

Indent every line of the
block by at least 4 spaces or 1 tab.

    Markdown wraps a code block in both `<pre>` and `<code>` tags.

Within a code block, ampersands (`&`) and angle brackets (`<` and `>`)
are automatically converted into HTML entities.

    <div class="footer">
        &copy; 2004
    </div>

. E.g.,

```
Regular Markdown syntax is **not** processed _within_ code blocks.
```

## Inline Elements

### Links

Examples:

* [This inline link](http://example.net/) has no title attribute.

### Images

* Inline-style: ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")
* Reference-style: ![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

### Emphasis

*single `<em>` asterisks*
_single `<em>` underscores_
**double `<strong>` asterisks**
__double `<strong>` underscores__
