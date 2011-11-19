# deck.js theme for Leipzig School of Media presentations

## How to use?

Please have a look at the [manual deck](http://aksw.github.com/lsom.theme.deck.js/manual/)
provided with the theme.

## How to integrate?

### download (static)
Just [download an archive](https://github.com/AKSW/lsom.theme.deck.js/downloads) and unpack it in a subdirectory.

### submodule (updateable)
You can add a git submodule the theme to you deck.js slide repository.
Doing this, you are able to update it to fetch the latest fixes (if any).
Unfortunatly, github does not fetch submodule in your gh-pages branch, so you
can use this integration only local.

### subtree merge (updateable and gh-pages ready)
If you want host your decks at github with gh-pages, you need to integrate them
with [subtree merge](http://help.github.com/subtree-merge/).

* add the lsom remote and fetch all changes from it:

    $ git remote add lsom git@github.com:AKSW/lsom.theme.deck.js.git

* merge the lsom/master branch but without commit:

    $ git merge -s ours --no-commit lsom/master

* integrate the master branch but with a given directory prefix (subdir
  userthemes must exist):

    $ git read-tree --prefix=userthemes/lsom -u lsom/master

* commit everything:

    $ git commit -m "Subtree merged in userthemes/lsom"

