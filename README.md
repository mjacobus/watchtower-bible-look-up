Watchtower Bible Lookup
========================
Extract bible references from the Watchtower weekly study.


== Usage

1. Go to the article page, such as: link:http://www.jw.org/en/publications/magazines/w20121015/let-your-yes-mean-yes/

2. In the javascript console, run:

```javascript
$('body').append('<script src="https://raw.github.com/mjacobus/watchtower-bible-look-up/development/src/WatchtowerLookup.js" type="text/javascript"></script>');
```

If an error occours, it probably means the github raw file cannot load at the moment. Please try later.