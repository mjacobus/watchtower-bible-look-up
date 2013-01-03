Watchtower Bible Lookup
========================
Extract bible references from the Watchtower weekly study.


== Usage

1. Go to the article page, such as: link:http://www.jw.org/en/publications/magazines/w20121015/let-your-yes-mean-yes/

2. In the javascript console, run:

```javascript
$('body').append('<script src="https://raw.github.com/mjacobus/watchtower-bible-look-up/development/src/BibleReference.js" type="text/javascript"></script>');
$('body').append('<script src="https://raw.github.com/mjacobus/watchtower-bible-look-up/development/src/WatchtowerLookup.js" type="text/javascript"></script>');
```

If an error occours, it probably means the github raw file cannot load at the moment. Please try later.

== Kown issues
There are different DOM for some chapters:

This works link http://www.jw.org/pt/publicacoes/biblia/1-reis/11#v-3
Note, the entire verse (1 King 11:3) is wrapped with a #v-3 selector

```html
<p>
	<span id="v-1" class="verse">
		<sup class="verseNum">
			<a data-anchor="#v-1" href="/pt/publicacoes/biblia/1-reis/11#v-1">1</a>
		</sup>
		<span class="style-b">E o próprio Rei Salomão amava muitas mulheres estrangeiras além da filha de Faraó, mulheres moabitas, amonitas, edomitas, sidônias [e] hititas,</span>
	</span>
	<span id="v-2" class="verse">
		<sup class="verseNum">
			<a data-anchor="#v-2" href="/pt/publicacoes/biblia/1-reis/11#v-2">2</a>
		</sup>
		<span class="style-b">das nações de que Jeová havia dito aos filhos de Israel: “Não deveis entrar no meio delas e elas mesmas não devem entrar no vosso meio; decerto inclinarão o vosso coração a seguir os seus deuses.” Foi a elas que Salomão se apegou para [as] amar.</span>
	</span>

	<!-- this is the target verse -->

	<span id="v-3" class="verse scriptureHighlight">
		<sup class="verseNum">
			<a data-anchor="#v-3" href="/pt/publicacoes/biblia/1-reis/11#v-3">3</a>
		</sup>
		<span class="style-b">E ele veio a ter setecentas esposas, princesas, e trezentas concubinas; e suas esposas gradualmente lhe inclinaram o coração.</span>
	</span>
	
	<!-- end of the target verse -->

	<span id="v-4" class="verse">
		<sup class="verseNum">
			<a data-anchor="#v-4" href="/pt/publicacoes/biblia/1-reis/11#v-4">4</a>
		</sup>
		<span class="style-b">E sucedeu, no tempo da velhice de Salomão, que as próprias esposas dele lhe haviam inclinado o coração para seguir outros deuses; e seu coração não se mostrou pleno para com Jeová, seu Deus, como o coração de Davi, seu pai.</span>
	</span>
	<span id="v-5" class="verse">
		<sup class="verseNum">
			<a data-anchor="#v-5" href="/pt/publicacoes/biblia/1-reis/11#v-5">5</a>
		</sup>
		<span class="style-b">E Salomão começou a ir atrás de Astorete, deusa dos sidônios, e atrás de Milcom, a coisa repugnante dos amonitas.</span>
	</span>
	<span id="v-6" class="verse">
		<sup class="verseNum">
			<a data-anchor="#v-6" href="/pt/publicacoes/biblia/1-reis/11#v-6">6</a>
		</sup>
		<span class="style-b">E Salomão começou a fazer o que era mau aos olhos de Jeová e não seguiu plenamente a Jeová como Davi, seu pai.</span>
	</span>
</p>

```

This does not http://www.jw.org/pt/publicacoes/biblia/salmos/34#v-3, since the verse (Psalms 34:3) not wrapped with a #v-3 container.

```html
<p><span class='verse' id='v-3'></span></p>

<p>
	<span>
		<sup class='superscription'>
			<span class="style-s">[ ג<em>Guímel</em>]</span>
		</sup>
		<sup class='verseNum'>
			<a href='/pt/publicacoes/biblia/salmos/34#v-3' data-anchor='#v-3'>3</a>
		</sup>
	<span class="style-l">Magnificai comigo a Jeová,</span></span>
</p>

<p>
	<span class="style-z">E exaltemos juntos o seu nome.</span></span>
</p>

```