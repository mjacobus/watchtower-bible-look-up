$('body').append('<script src="https://raw.github.com/mjacobus/watchtower-bible-look-up/development/src/BibleReference.js" type="text/javascript"></script>');

var content = [$('#article h1').text()];

$('.bodyTxt a.jsBibleLink').each(function(textNumber){
    var href = $(this).attr('href');
    var vs = [];
    var r = new BibleReference();
    var verses = r.setText($(this).text()).getVerses();
    
    $.ajax({url:href, async: false, success:function(response){
        var html = $(response);
        for(var i in verses) {
            var selector = '#v-' + verses[i];
            vs.push(html.find(selector).text());
        }
    }});
    
    content.push(r.getText());
    content.push(vs.join(" "));
});

alert(content.join("\n"));