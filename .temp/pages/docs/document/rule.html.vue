<template><div><h1 id="语法规范" tabindex="-1"><a class="header-anchor" href="#语法规范" aria-hidden="true">#</a> 语法规范</h1>
<p>我为了让文章看起来清晰对于所有篇章的语法做出了严格的语法规范</p>
<h2 id="_1-标题规范" tabindex="-1"><a class="header-anchor" href="#_1-标题规范" aria-hidden="true">#</a> 1 标题规范</h2>
<p>标题必须按照他所处的编号依次往下排，如果是一个大标题的子标题则需要在大标题的基础上写 <code v-pre>.1</code></p>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> 1 标题</span>
<span class="token title important"><span class="token punctuation">##</span> 1.1 子标题</span>
<span class="token title important"><span class="token punctuation">##</span> 1.2 子标题</span>

<span class="token title important"><span class="token punctuation">#</span> 2 标题</span>
<span class="token title important"><span class="token punctuation">##</span> 2.1 子标题</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-文章结构" tabindex="-1"><a class="header-anchor" href="#_2-文章结构" aria-hidden="true">#</a> 2 文章结构</h2>
<p>每一篇文章开头必须要有一段总结性的文字，并在后方进行具体说明</p>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token bold"><span class="token punctuation">**</span><span class="token content">概述：</span><span class="token punctuation">**</span></span> 这篇文章的内容是用于解释文章的语法规范

我们的文章中采用了众多的方式规范语法，从标题到内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此外一篇文章如果有注意点或者可以提示的点需要在末尾说明</p>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code>::: tip 提示
阅读这篇文章可以帮助你更好的阅读文档
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">提示</p><p>阅读这篇文章可以帮助你更好的阅读文档</p>
</div><h2 id="_3-内容规范" tabindex="-1"><a class="header-anchor" href="#_3-内容规范" aria-hidden="true">#</a> 3 内容规范</h2>
<p>对于一个是在展示内容中的按钮、代码等。我们会用 <code v-pre>小方块</code> 括起来</p>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token code-snippet code keyword">`Python`</span>， 中我们使用 <span class="token code-snippet code keyword">`print()`</span> 输出内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>Python</code>， 中我们使用 <code v-pre>print()</code> 输出内容</p>
<p>对于有多行的代码块。我们使用 <code v-pre>markdown</code> 中的代码块包括</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
b <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果文章中的内容穿插着英文，数字。则需要加上空格</p>
<div class="language-markdown line-numbers-mode" data-ext="md"><pre v-pre class="language-markdown"><code><span class="token code-snippet code keyword">`print(1 + 1)`</span> 会输出 <span class="token code-snippet code keyword">`2`</span>，这就是 code 的魅力
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>print(1 + 1)</code> 会输出 <code v-pre>2</code>，这就是 code 的魅力</p>
</div></template>


