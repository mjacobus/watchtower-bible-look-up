describe("watchtowerBibleLookup.js", function() {
  
  describe("BibleReference",function(){
    beforeEach(function(){
      this.o = new BibleReference();
    });
    
    describe("#setText and #getText", function() {
      it("sets and gets the text", function() {
        expect(this.o.setText('Mat 6:33').getText()).toEqual('Mat 6:33');
      });
    });
    
    describe("#setHtmlContent and #getHtmlContent", function() {
      it("sets and gets the html content", function() {
        expect(this.o.setHtmlContent('<p></p>').getHtmlContent()).toEqual('<p></p>');
      });
    });
    
    describe("#setContent and #getContent", function() {
      it("sets and gets the content", function() {
        expect(this.o.setContent('the content').getContent()).toEqual('the content');
      });
    });
    
    describe("#getVerses", function() {
      var expectations = [
        ["Mat. 6:33 ",[33]],
        ["Mat. 6:33,34 ",[33,34]],
        ["Mat. 6:30,31,34 ",[30,31,34]],
        ["Mat. 6:30-33 ",[30,31,32,33]],
        ["33",[33]],
        ["33,34",[33,34]],
        ["33,34, ",[33,34]],
      ];
      
      for (var i in expectations) {
        var text = expectations[i][0]
        var verses = expectations[i][1]
        
        it("with " + text, function() {
          expect(this.o.setText(text).getVerses()).toEqual(verses);
        });  
      }
    });  
  });
});