$('body').append('<script src="https://raw.github.com/mjacobus/watchtower-bible-look-up/development/src/BibleReference.js" type="text/javascript"></script>');

var references = [];

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
        r.setContent(vs.join(" "));
    }});
    
    references.push(r);
});

var content = [['<h1>',$('#article h1').text(), '</h1>'].join('')]
var r;
for(var i in references) {
    r = references[i];
    content.push(['<h2>',r.getText(),'</h2>'].join(''));
    content.push(['<p>',r.getContent(),'</p>'].join(''));
}

$('#extracted_texts').remove();
$('body').prepend('<div id="extracted_texts">' + content.join("") +'</div>');