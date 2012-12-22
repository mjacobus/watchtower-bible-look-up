function BibleReference(){}

BibleReference.prototype = {
  text: null,
  url: null,
  content: null,
  htmlContent: null,
  
  /**
   * @param String htmlContent content of a chapter in the watchtower
   *                           online bible.
   */
  setHtmlContent: function(htmlContent) {
    this.htmlContent = htmlContent;
    return this;
  },
  
  /**
   * Get the html content to extract the bible reference
   * content of the given verse
   * @return String
   */
  getHtmlContent: function(){
    return this.htmlContent;
  },
  
  /**
   * @param String text as in the links presented in the watchtower
   *                    article I.E: Mat 6:33 or Mat 6:30-33
   *                    or Mat 3:31,34 or 33 or 33,34
   */
  setText: function(text){
    this.text = text
    return this;
  },
  
  /**
   * Get the text it should look up
   * @return String
   */
  getText: function(){
    return this.text;
  },
  
  /**
   * The text content
   * @param String content
   */
  setContent: function(content){
    this.content = content;
    return this;
  },
  
  /**
   * The text content
   * @return String
   */
  getContent: function(){
    return this.content;
  },
  
  /**
   * The verses it should look for
   * @return Array
   */
  getVerses: function(){
    var text = this.getText();
    var matches = text.match(/\d{1,}(-|,\s?)\d{1,}/);
    var verses = [];
  
    if (matches !== null) {
      var t = matches[0].replace(/\D+/g,'-' ).split('-');
      var begins = parseInt(t[0]), ends = parseInt(t[1]);
      
      for(var i = begins; i !== (ends + 1); i++){
        verses.push(i);
      }
    } else {
      verses.push(parseInt(text.match(/\d+(\D?)$/)[0].replace(/\D/g,'')));
    }
    
    return verses;
  }
}