<template><div><h1 id="整齐的分类" tabindex="-1"><a class="header-anchor" href="#整齐的分类" aria-hidden="true">#</a> 整齐的分类</h1>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> sidebar <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vuepress-theme-hope"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">sidebar</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token string-property property">"/"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      text<span class="token operator">:</span> <span class="token string">"学习资料"</span><span class="token punctuation">,</span>
      icon<span class="token operator">:</span> <span class="token string">"book"</span><span class="token punctuation">,</span>
      prefix<span class="token operator">:</span> <span class="token string">"guide/"</span><span class="token punctuation">,</span>
      children<span class="token operator">:</span> <span class="token string">"structure"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      text<span class="token operator">:</span> <span class="token string">"关于文档"</span><span class="token punctuation">,</span>
      icon<span class="token operator">:</span> <span class="token string">"info"</span><span class="token punctuation">,</span>
      prefix<span class="token operator">:</span> <span class="token string">"about/"</span><span class="token punctuation">,</span>
      children<span class="token operator">:</span> <span class="token string">"structure"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们使用侧边栏分类每一篇文档，使知识点复习更加方便</p>
</div></template>


