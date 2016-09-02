# urlencode-cli

URL encoding (percent-encoding) CLI

### Usage

```
$ urlencode foo/bar@baz
foo%2Fbar%40baz

$ urlencode foo/bar baz@qux
foo%2Fbar baz%40qux

$ urlencode "foo/bar baz@qux"
foo%2Fbar%20baz%40qux
```
