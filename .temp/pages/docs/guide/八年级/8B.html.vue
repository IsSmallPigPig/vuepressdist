<template><div><h1 id="八年级下学期计算机资料" tabindex="-1"><a class="header-anchor" href="#八年级下学期计算机资料" aria-hidden="true">#</a> 八年级下学期计算机资料</h1>
<h2 id="_1-python-编程基础" tabindex="-1"><a class="header-anchor" href="#_1-python-编程基础" aria-hidden="true">#</a> 1 Python 编程基础</h2>
<h3 id="_1-1-注释语句" tabindex="-1"><a class="header-anchor" href="#_1-1-注释语句" aria-hidden="true">#</a> 1.1 注释语句</h3>
<h4 id="_1-1-1-单行注释" tabindex="-1"><a class="header-anchor" href="#_1-1-1-单行注释" aria-hidden="true">#</a> 1.1.1 单行注释</h4>
<p><strong>定义：</strong> 单行的被编译器忽略的文本</p>
<p><strong>用途：</strong> 帮助阅读代码，利于后期维护，便于理解算法</p>
<p><strong>语法：</strong> <code v-pre># 注释内容</code></p>
<p><strong>示例：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 单行注释</span>
<span class="token comment"># 这是输出 Hello World 的代码</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Hello World"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">总结</p><p>单行注释可以便捷的帮助理解一行代码，也是比较常用的注释方式</p>
</div><h4 id="_1-1-2-多行注释" tabindex="-1"><a class="header-anchor" href="#_1-1-2-多行注释" aria-hidden="true">#</a> 1.1.2 多行注释</h4>
<p><strong>定义：</strong> 可跨越多行的被编译器忽略的文本</p>
<p><strong>用途：</strong> 书写函数批注，理解复杂算法</p>
<p><strong>语法：</strong> <code v-pre>&quot;&quot;&quot;注释内容&quot;&quot;&quot; / '''注释内容''''</code></p>
<p><strong>示例：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">hello_opt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">"""
    这是一个多行注释
    这个函数的用途是输出 Hello World
    不需要任何形参
    """</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Hello World"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">总结</p><p>多行注释适合处理比单行注释复杂的场景。例如一个大型项目的函数等。它的特点是可以换行处理，不一定限制在单行</p>
</div><h3 id="_1-2-输入和输出" tabindex="-1"><a class="header-anchor" href="#_1-2-输入和输出" aria-hidden="true">#</a> 1.2 输入和输出</h3>
<h4 id="_1-2-1-输入" tabindex="-1"><a class="header-anchor" href="#_1-2-1-输入" aria-hidden="true">#</a> 1.2.1 输入</h4>
<p><strong>定义：</strong> 获得用户输入内容的函数</p>
<p><strong>语法：</strong> <code v-pre>变量 = input( 变量 / 数据类型 /...)</code></p>
<p><strong>用途：</strong> 实际开发中需要用户提供数据实现操作的场景（例如圆的面积的计算）</p>
<p><strong>示例：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 这是一个输出语句</span>
a <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">"请输入："</span><span class="token punctuation">)</span>
<span class="token comment"># 用户输入的内容会被赋值给 a，所以打印出来的是用户输入的内容（例如输入 1 就输出 1 ）</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>input( )</code> 函数中可以什么都不填，但是这样可能会导致用户以为卡死了。所以建议填入一些提示信息</p>
<p><code v-pre>input( )</code> 函数会阻塞线程，就是程序到 <code v-pre>input( )</code> 这里就不动了除非用户输入数据并按下了回车
<strong>示例2：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 输出 Hello，此时程序正常运行</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Hello"</span><span class="token punctuation">)</span>
<span class="token comment"># input 阻塞线程，程序在这里停止</span>
a <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">"请输入："</span><span class="token punctuation">)</span>
<span class="token comment"># 除非用户按下回车，否则下面这段代码不会执行</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"我被执行了~"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是，<code v-pre>input( )</code> 函数获得到的内容默认类型都是字符串</p>
<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">总结</p><p>输入是一个很实用的函数，它是用户与程序交流的途径。使用它我们将能发掘 Python 更多强大的功能。其获得到的内容都是字符串类型</p>
</div><h4 id="_1-2-2-输出" tabindex="-1"><a class="header-anchor" href="#_1-2-2-输出" aria-hidden="true">#</a> 1.2.2 输出</h4>
<p><strong>定义：</strong> 输出是把指定内容打印到终端上的函数</p>
<p><strong>语法：</strong> <code v-pre>print( 变量 / 数据类型 / ..)</code></p>
<p><strong>用途：</strong> 实际开发中需要与用户交互的场景（例如输出计算结果）</p>
<p><strong>示例：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 定义函数 a 并赋值 Hello</span>
a <span class="token operator">=</span> <span class="token string">'Hello'</span>
<span class="token comment"># 输出 Hello World</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Hello World"</span><span class="token punctuation">)</span>
<span class="token comment"># 输出 a。但因为 a 的值是 Hello，所以输出 Hello</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>事实上 <code v-pre>print( )</code> 函数有相当多的强大功能，但是碍于你们还没有学表达式，先按下不表</p>
<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">总结</p><p><code v-pre>print( )</code> 是一个功能强大的函数，它是程序与用户交流的途径，也是程序开发中最常用的函数之一</p>
</div><h3 id="_1-3-数据类型" tabindex="-1"><a class="header-anchor" href="#_1-3-数据类型" aria-hidden="true">#</a> 1.3 数据类型</h3>
<p><strong>定义：</strong> 数据类型是一个值的集合和定义在这个值集上的一组操作的总称</p>
<p><strong>用途：</strong> 存储临时数据进行操作</p>
<p><strong>数据类型：</strong></p>
<table>
<thead>
<tr>
<th style="text-align:center">中文名</th>
<th style="text-align:center">英文名</th>
<th style="text-align:center">转换函数</th>
<th style="text-align:center">意义</th>
<th style="text-align:center">语法</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">字符串</td>
<td style="text-align:center"><code v-pre>str / string</code></td>
<td style="text-align:center"><code v-pre>str( )</code></td>
<td style="text-align:center">一般存储文字，符号等内容的数据类型。数字等也可以</td>
<td style="text-align:center">变量 = <code v-pre>&quot;字符串&quot; / '字符串'</code></td>
</tr>
<tr>
<td style="text-align:center">整数</td>
<td style="text-align:center"><code v-pre>int</code></td>
<td style="text-align:center"><code v-pre>int( )</code></td>
<td style="text-align:center">存储整数和小数，但是小数会被去掉小数点后边的部分（不会四舍五入）</td>
<td style="text-align:center"><code v-pre>变量 = 整数</code></td>
</tr>
<tr>
<td style="text-align:center">浮点数</td>
<td style="text-align:center"><code v-pre>float</code></td>
<td style="text-align:center"><code v-pre>float( )</code></td>
<td style="text-align:center">存储浮点数和整数，但是整数会跟上 <code v-pre>.0</code> 。例如 <code v-pre>float( 1 )</code> 就会变成 <code v-pre>1.0</code></td>
<td style="text-align:center"><code v-pre>变量 = 浮点数</code></td>
</tr>
<tr>
<td style="text-align:center">布尔值</td>
<td style="text-align:center"><code v-pre>bool</code></td>
<td style="text-align:center"><code v-pre>bool( )</code></td>
<td style="text-align:center">只有两种可存储的数据：<code v-pre>True</code> 和 <code v-pre>False</code>。分别代表真和假</td>
<td style="text-align:center"><code v-pre>变量 = True / False</code></td>
</tr>
<tr>
<td style="text-align:center">空值</td>
<td style="text-align:center"><code v-pre>None</code></td>
<td style="text-align:center">无</td>
<td style="text-align:center">代表什么都没有，但是不与其它任何数据类型等价</td>
<td style="text-align:center"><code v-pre>变量 = None</code></td>
</tr>
</tbody>
</table>
<p>以上是 Python 中所有的数据类型表格。我会对其中的知识点进行系统的讲解</p>
<div class="custom-container info"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">提示</p><p>本章的代码在线运行网页在这，推荐配合文档使用
<a href="https://shiyizhihanzhuzhuya.github.io/jupyterbook/lab?path=note%2F%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.ipynb" target="_blank" rel="noopener noreferrer">数据类型<ExternalLinkIcon/></a></p>
</div><h4 id="_1-3-1-字符串数据类型" tabindex="-1"><a class="header-anchor" href="#_1-3-1-字符串数据类型" aria-hidden="true">#</a> 1.3.1 字符串数据类型</h4>
<p><strong>定义：</strong> 一般存储文字，符号等内容的数据类型。数字等也可以</p>
<p><strong>用途：</strong> 存储用户输入，存储输出信息</p>
<p><strong>语法：</strong> <code v-pre>变量 = &quot;字符串&quot; / '字符串'</code></p>
<p><strong>转换函数：</strong> <code v-pre>str( )</code></p>
<p>字符串是从新手期到老手都会用到的类型，也是最常用的数据类型。它的主要特点是 <strong>占用内存大，可存储内容多</strong></p>
<p>字符串字符串，顾名思义是存储文字的。一般来说我们把它用于输出文字信息，例如 <code v-pre>Hello World</code> ， <code v-pre>1</code> ······ 等等，1 也是字符串吗？</p>
<p>答案是肯定的，也许这有点违反我们的数学常识，但是我给你们解释一下就明白了</p>
<p>我们中国有这么多人，有人同名同姓很合理吧？现在你遇到了两个人：一个男的叫小明，另一个女的也叫小明。那你能说她们俩是一个人吗？当然不能，程序也是这样</p>
<p><strong>示例：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 真正的整数 1</span>
a <span class="token operator">=</span> <span class="token number">1</span>
<span class="token comment"># 字符串的 1</span>
b <span class="token operator">=</span> <span class="token string">"1"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></g></svg><p class="custom-container-title">注意</p><p>显示的内容相同不代表两个函数存储的内容意义相同。在这个示例中 <code v-pre>a</code> 是不等于 <code v-pre>b</code> 的</p>
</div><p>那么到这里有同学就要问了，假如我想要让整数的 <code v-pre>1</code> 变成字符串的 <code v-pre>1</code>。有可能吗？</p>
<p>当然有！Python 为我们提供了类型转换函数，每个数据类型都有自己的类型转换函数。只要你填进的内容符合要求就可以转换</p>
<p><strong>示例2：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 这是一个整数类型的 2</span>
a <span class="token operator">=</span> <span class="token number">2</span>
<span class="token comment"># 这是一个字符串变量</span>
b <span class="token operator">=</span> <span class="token string">''</span>
<span class="token comment"># 将 a 中整数类型的 2 转换为字符串类型的 2 并赋值给 b</span>
b <span class="token operator">=</span> <span class="token builtin">str</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token comment"># 输出 b，此时应该是字符串类型的 b</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于 <code v-pre>str</code> 类型的通用性，<code v-pre>str( )</code> 几乎可以转换任何数据类型。那么其它数据类型也如此吗</p>
<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">总结</p><p>字符串数据类型（<code v-pre>str</code>）有着占用内存大、可存储内容多的特点。转换可以使用 <code v-pre>str( )</code> 函数转换</p>
</div><h4 id="_1-3-2-整数数据类型" tabindex="-1"><a class="header-anchor" href="#_1-3-2-整数数据类型" aria-hidden="true">#</a> 1.3.2 整数数据类型</h4>
<p><strong>定义：</strong> 存储整数和小数的数据类型</p>
<p><strong>用途：</strong> 算法中数据的存储，计算结果的保存</p>
<p><strong>语法：</strong> <code v-pre>变量 = 整数 / 小数</code></p>
<p><strong>转换函数：</strong> <code v-pre>int( )</code></p>
<p><strong>示例：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># a 是一个整数类型的变量</span>
a <span class="token operator">=</span> <span class="token number">1</span>
<span class="token comment"># 1 也是整数数据类型</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>事实上你看到的所有不带 <code v-pre>&quot; &quot;</code> 或 <code v-pre>' '</code> 的整数都是整数数据类型</p>
<p>我们说过每个数据类型都有转换函数，<code v-pre>int</code> 数据类型也不例外。但它有些特别</p>
<p>整数数据类型和浮点数数据类型的边界比较模糊。唯一的区别就是一个专门负责处理整数，一个专门负责处理浮点数。可是浮点数可以被存储进整数数据类型里边，整数可以存储进浮点数数据类型里边</p>
<p>那么这样操作数据会有什么变化呢？不会 Python 就会让你无变化的进行这样子的操作造成歧义吗？</p>
<p><strong>示例2：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 显然 a 是一个浮点数数据类型</span>
a <span class="token operator">=</span> <span class="token number">1.1</span>
<span class="token comment"># 将 a 转换为整数并赋值给 b</span>
b <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token comment"># b 存储的是 1，输出 1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是为什么呢？Python 为了明确职责和一些复杂的数据类型操作，会将转换浮点数为整数的结果直接把小数部分去掉，只保留整数部分并且不会四舍五入。所以 <code v-pre>1.1</code> 被保留整数部分后就是 <code v-pre>1</code>，那么 <code v-pre>b</code> 存储的当然就是 <code v-pre>1</code></p>
<p>那么字符串可以转换为 <code v-pre>int</code> 数据类型吗？答案是可以，也不可以</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># a 是字符串数据类型的 1</span>
a <span class="token operator">=</span> <span class="token string">'1'</span>
<span class="token comment"># 将 a 的值转换为整数数据类型并赋值给 b</span>
b <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token comment"># 输出 b，b 存储的是整数类型的 1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>

<span class="token comment"># c 是字符串类型的 hello</span>
c <span class="token operator">=</span> <span class="token string">'hello'</span>
<span class="token comment"># 将 c 的值转换为整数数据类型并赋值给 d</span>
d <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
<span class="token comment"># 报错</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么为什么字符串数据类型的 <code v-pre>1</code> 可以但是字符串数据类型的 <code v-pre>hello</code> 不可以呢？</p>
<p>答案显而易见，因为哪个数字是 <code v-pre>hello</code> 嘛。所以整数数据类型只能转换其它存储的是整数或小数的内容的数据类型（例如 <code v-pre>&quot;2&quot;</code>）</p>
<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">总结</p><p>整数数据类型（<code v-pre>int</code>）是专门负责处理整数的数据类型。如果转换浮点数数据类型为整数数据类型，会只保留整数部分并且 <strong>不会</strong> 四舍五入。其他数据类型也可以转换为整数数据类型，前提是它存储的内容是数字</p>
</div><h4 id="_1-3-3-浮点数数据类型" tabindex="-1"><a class="header-anchor" href="#_1-3-3-浮点数数据类型" aria-hidden="true">#</a> 1.3.3  浮点数数据类型</h4>
<p><strong>定义：</strong> 存储浮点数和整数的数据类型</p>
<p><strong>用途：</strong> 存储更精细的数据，更复杂的数据计算</p>
<p><strong>语法：</strong> <code v-pre>变量 = 整数 / 小数</code></p>
<p><strong>转换函数：</strong> <code v-pre>float( )</code></p>
<p><strong>示例：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># a 是一个浮点数数据类型的变量</span>
a <span class="token operator">=</span> <span class="token number">1.1</span>
<span class="token comment"># 1.1 也是浮点数</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">1.1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>和整数一样，其实它们都是数字。唯一的区别只是有个小数点而已，也正是因为浮点数有这个小数点所以我们才叫它浮点数（理工的浪漫了属于是）</p>
<p>既然它也是数字，那么浮点数有什么特性呢？当然是能存储高精度的数字嘛，不同于整数数据类型只能保存整数部分，浮点数数据类型可以存储非整数部分</p>
<p>同样，它的转换函数也可以填入整数，那么这又会对数据本身产生什么影响呢？</p>
<p><strong>示例2：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># a 是整数数据类型的变量</span>
a <span class="token operator">=</span> <span class="token number">1</span>
<span class="token comment"># 将 a 转换为浮点数并赋值给 b</span>
b <span class="token operator">=</span> <span class="token builtin">float</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token comment"># 1 后边多了个 ".0" (1.0)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样，为了明确职责，减小歧义，Python 会对数据进行处理。如果你传入的是一个整数就会加上 <code v-pre>.0</code> 改变为浮点数</p>
<p>那么字符串可以转换为 <code v-pre>float</code> 数据类型吗？答案同样是可以、也不可以</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># a 是字符串数据类型的 1.1</span>
a <span class="token operator">=</span> <span class="token string">'1.1'</span>
<span class="token comment"># 将 a 的值转换为浮点数数据类型并赋值给 b</span>
b <span class="token operator">=</span> <span class="token builtin">float</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token comment"># 输出 b，b 存储的是浮点数数据类型的 1.1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>

<span class="token comment"># c 是字符串类型的 hello</span>
c <span class="token operator">=</span> <span class="token string">'hello'</span>
<span class="token comment"># 将 c 的值转换为浮点数数据类型并赋值给 d</span>
d <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
<span class="token comment"># 报错</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原因很简单，你也没见过是 <code v-pre>hello</code> 的浮点数嘛。同样它也可以转换其它数据类型存储内容为数字的变量</p>
<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">总结</p><p>浮点数数据类型（float）是专门负责处理浮点数的数据类型。如果转换整数数据类型为浮点数数据类型，会在后面加上 <code v-pre>.0</code> 改变整数为浮点数</p>
</div><h4 id="_1-3-4-布尔数据类型" tabindex="-1"><a class="header-anchor" href="#_1-3-4-布尔数据类型" aria-hidden="true">#</a> 1.3.4 布尔数据类型</h4>
<p><strong>定义：</strong> 只有真（ <code v-pre>True</code> ）和假（ <code v-pre>False</code> ）的数据类型</p>
<p><strong>语法：</strong> <code v-pre>变量 = True / False</code></p>
<p><strong>用途：</strong> 表达式判断，循环结构</p>
<p><strong>转换函数：</strong> <code v-pre>bool( )</code></p>
<p><strong>示例：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 布尔值中的真</span>
a <span class="token operator">=</span> <span class="token boolean">True</span>
<span class="token comment"># 布尔值中的假</span>
b <span class="token operator">=</span> <span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们都知道计算机世界是由 2 进制构成的，事实上我们在电脑上看到的其它东西对于计算机来说都是 <code v-pre>0</code> 和 <code v-pre>1</code> 。甚至是逻辑，布尔类型就是这么个东西</p>
<p>布尔值只有两种，<code v-pre>True</code> 和 <code v-pre>False</code> ，分别代表真和假。它的运用很广泛，在之后的循环结构和分支结构中等等我们都会见到它。值得注意的是 <code v-pre>True</code> 和 <code v-pre>False</code> 用 <code v-pre>1</code> 和 <code v-pre>0</code> 表示也是正确的</p>
<p><strong>示例2：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">3</span>
b <span class="token operator">=</span> <span class="token number">2</span>
<span class="token comment"># 判断 a 是否大于 b 。因为 a 确实大于 b，所以输出 True</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a <span class="token operator">></span> b<span class="token punctuation">)</span>

<span class="token comment"># 判断 5 是否小于 4 。因为 5 不小于 4，所以输出 False</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">总结</p><p>布尔数据类型（bool）是一种真伪判断符，只有真和假的两种状态（也许这才是计算机的模样，天真的孩子）
除了用 <code v-pre>True</code> 和 <code v-pre>False</code> 可以表示真和假之外，<code v-pre>1</code> 和 <code v-pre>0</code> 也可以</p>
</div><h4 id="_1-3-5-空值" tabindex="-1"><a class="header-anchor" href="#_1-3-5-空值" aria-hidden="true">#</a> 1.3.5 空值</h4>
<p><strong>定义：</strong> 代表空的数据类型</p>
<p><strong>语法：</strong> <code v-pre>变量 = None</code></p>
<p><strong>用途：</strong> 声明变量</p>
<p><strong>示例：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 声明变量 a</span>
a <span class="token operator">=</span> <span class="token boolean">None</span>
<span class="token comment"># 创建整数数据类型变量 b，并赋值 0</span>
b <span class="token operator">=</span> <span class="token number">0</span>
<span class="token comment"># a 与 b 是否等价？</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a <span class="token operator">==</span> b<span class="token punctuation">)</span>
<span class="token comment"># 输出 False，代表不等价</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>空值，顾名思义就是没有任何东西的数据类型。这个数据类型一般用于占位来声明变量。需要注意的是，因为空值本身就是一个数据类型，所以它不与 <code v-pre>0</code> 或 <code v-pre>&quot; &quot;</code> 等价</p>
<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">总结</p><p>空值一般用于占位。由于它本身就是一个数据类型，所以不与其它数据类型中代表空的数值等价</p>
</div><h3 id="_1-4-表达式" tabindex="-1"><a class="header-anchor" href="#_1-4-表达式" aria-hidden="true">#</a> 1.4 表达式</h3>
<p><strong>定义：</strong> 由常量，变量，运算符，小括号等按一定语法规则组成的式子</p>
<p><strong>用途：</strong> 进行数据操作，优化输出内容，计算结果</p>
<div class="custom-container info"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">提示</p><p>本章的代码在线运行网页在这，推荐配合文档使用
<a href="https://shiyizhihanzhuzhuya.github.io/jupyterbook/lab?path=note%2F%E8%A1%A8%E8%BE%BE%E5%BC%8F.ipynb" target="_blank" rel="noopener noreferrer">表达式<ExternalLinkIcon/></a></p>
</div><h4 id="_1-4-1-算数运算符" tabindex="-1"><a class="header-anchor" href="#_1-4-1-算数运算符" aria-hidden="true">#</a> 1.4.1 算数运算符</h4>
<p><strong>定义：</strong> 用于数学计算的运算符</p>
<p><strong>用途：</strong> 数据操作</p>
<p><strong>算术运算符：</strong></p>
<div class="center">
<table>
<thead>
<tr>
<th style="text-align:center">运算</th>
<th style="text-align:center">运算符</th>
<th style="text-align:center">例子</th>
<th>结果</th>
<th>意义</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">加法</td>
<td style="text-align:center"><code v-pre>+</code></td>
<td style="text-align:center"><code v-pre>a = 1 + 2</code></td>
<td>3</td>
<td>一个数与另一个数的加法运算求和</td>
</tr>
<tr>
<td style="text-align:center">减法</td>
<td style="text-align:center"><code v-pre>-</code></td>
<td style="text-align:center"><code v-pre>a = 3 - 1</code></td>
<td>2</td>
<td>一个数与另一个数的减法运算</td>
</tr>
<tr>
<td style="text-align:center">乘法</td>
<td style="text-align:center"><code v-pre>*</code></td>
<td style="text-align:center"><code v-pre>a = 3 * 4</code></td>
<td>12</td>
<td>一个数与另一个数的乘法运算</td>
</tr>
<tr>
<td style="text-align:center">除法</td>
<td style="text-align:center"><code v-pre>/</code></td>
<td style="text-align:center"><code v-pre>a = 12 / 6</code></td>
<td>2</td>
<td>一个数与另一个数的除法运算</td>
</tr>
<tr>
<td style="text-align:center">求幂</td>
<td style="text-align:center"><code v-pre>a ** a</code></td>
<td style="text-align:center"><code v-pre>a = 3 ** 2</code></td>
<td>9</td>
<td>一个数与另一个数的幂运算</td>
</tr>
<tr>
<td style="text-align:center">括号</td>
<td style="text-align:center"><code v-pre>( )</code></td>
<td style="text-align:center"><code v-pre>a = (3 + 4) * 2</code></td>
<td>14</td>
<td>提升运算优先级</td>
</tr>
<tr>
<td style="text-align:center">整除</td>
<td style="text-align:center"><code v-pre>//</code></td>
<td style="text-align:center"><code v-pre>a = 11 // 2</code></td>
<td>5</td>
<td>除不尽的取整数部分</td>
</tr>
<tr>
<td style="text-align:center">求余</td>
<td style="text-align:center"><code v-pre>%</code></td>
<td style="text-align:center"><code v-pre>a = 15 % 2</code></td>
<td>1</td>
<td>除不尽的取余数</td>
</tr>
</tbody>
</table>
</div>
<p>表达式其实就是我们数学中的运算符，所以它应该很好理解吧？但还是请同学们认真背一背符号，不要搞混了</p>
<p>因为其他运算比较简单，我就只讲两个比较特殊的运算</p>
<h5 id="_1-4-1-1-整除" tabindex="-1"><a class="header-anchor" href="#_1-4-1-1-整除" aria-hidden="true">#</a> 1.4.1.1 整除</h5>
<p><strong>定义：</strong> 将一个数除以另一个数，然后向下取整到最接近的整数的除法</p>
<p><strong>语法：</strong> <code v-pre>a = b // c</code></p>
<p><strong>用途：</strong> 做只保留整数的运算</p>
<p><strong>示例：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 变量 a 的值是 6 整除 2 的结果</span>
a <span class="token operator">=</span> <span class="token number">6</span> <span class="token operator">//</span> <span class="token number">2</span>
<span class="token comment"># 输出的也是 6 整除 2 的结果</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">6</span> <span class="token operator">//</span> <span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>整除整除，刚好除完嘛。但是整除有一些特殊的性质你们要知道</p>
<p><strong>示例2：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 变量 a 的值是 5 整除 2 的结果</span>
a <span class="token operator">=</span> <span class="token number">5</span> <span class="token operator">//</span> <span class="token number">2</span>
<span class="token comment"># 输出 2</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>没错，在这个示例中，5 显然不可能整除 2。那么程序运行之后为什么会输出 2 呢？我们知道，在除法中，结果有 <strong>商</strong> 和 <strong>余数</strong> 两个部分，而整除就代表只取商</p>
<p>这个例子中 5 除 2 显然商是 2，余数是 1。所以输出的就是 2</p>
<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">总结</p><p>整除（ <code v-pre>//</code> ）中，得到的结果一定是整数，取的值是这个除法的商</p>
</div><h5 id="_1-4-1-2-取余" tabindex="-1"><a class="header-anchor" href="#_1-4-1-2-取余" aria-hidden="true">#</a> 1.4.1.2 取余</h5>
<p><strong>定义：</strong> 计算两个数相除之后的余数的除法</p>
<p><strong>语法：</strong> <code v-pre>a = b % c</code></p>
<p><strong>用途：</strong> 数据操作，只需要余数的运算</p>
<p><strong>示例：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 变量 a 的值是 5 取余 2 的结果，是 1</span>
a <span class="token operator">=</span> <span class="token number">5</span> <span class="token operator">%</span> <span class="token number">2</span>
<span class="token comment"># 输出的也是 5 取余 2 的结果，是 1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">%</span> <span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>取余运算只会获得相除后的余数，如上面的示例一样。5 除 2 商是 2 余数是 1。所以输出 1</p>
<p>那么如果刚好能整除呢？</p>
<p><strong>示例2：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 变量 a 的值是 6 取余 2 的结果</span>
a <span class="token operator">=</span> <span class="token number">6</span> <span class="token operator">%</span> <span class="token number">2</span>
<span class="token comment"># 输出 0</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果能整除那就是没有余数，那余数就是 0。在开发过程中我们通常使用这种手段判断一个数字是不是某个数字的倍数</p>
<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">总结</p><p>取余运算与整除是一对好兄弟，整除运算取商，取余运算取余。如果能整除则取余 0</p>
</div><h4 id="_1-4-2-字符串运算符" tabindex="-1"><a class="header-anchor" href="#_1-4-2-字符串运算符" aria-hidden="true">#</a> 1.4.2 字符串运算符</h4>
<p><strong>定义：</strong> 实现字符串与字符串之间的操作的运算符</p>
<p><strong>用途：</strong> 输出内容优化，字符串数据操作</p>
<p><strong>字符串运算符：</strong></p>
<div class="center">
<table>
<thead>
<tr>
<th style="text-align:center">运算符</th>
<th style="text-align:center">含义</th>
<th style="text-align:center">示例</th>
<th>意义</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">+</td>
<td style="text-align:center">连接字符串</td>
<td style="text-align:center"><code v-pre>print(&quot;12&quot; + &quot;34&quot;)</code></td>
<td><code v-pre>&quot;12&quot; + &quot;34&quot;</code> 的值是 <code v-pre>&quot;1234&quot;</code></td>
</tr>
<tr>
<td style="text-align:center">*</td>
<td style="text-align:center">重复若干次字符串</td>
<td style="text-align:center"><code v-pre>print(2 * &quot;哈&quot;)</code></td>
<td><code v-pre>2</code> * <code v-pre>&quot;哈&quot;</code> 的值是 <code v-pre>哈哈</code></td>
</tr>
</tbody>
</table>
</div>
<p><strong>示例：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># a 的值是 "5" 和 "2" 连接起来的样子</span>
a <span class="token operator">=</span> <span class="token string">"5"</span> <span class="token operator">+</span> <span class="token string">"2"</span>
<span class="token comment"># 输出 a，结果是 "52"</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>

<span class="token comment"># a 的结果是 Hello 被重复六次的样子</span>
a <span class="token operator">=</span> <span class="token number">6</span> <span class="token operator">*</span> <span class="token string">"Hello"</span>
<span class="token comment"># 输出 6 次 Hello</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5-随堂练习" tabindex="-1"><a class="header-anchor" href="#_1-5-随堂练习" aria-hidden="true">#</a> 1.5 随堂练习</h3>
<p>你们已经迈出了走向 Python 世界的一大步。为了巩固知识，减少遗忘。我为你们提供了一套练习题，可以根据自己的需要阅览</p>
<iframe src='https://ks.wjx.top/vm/rXYFzpD.aspx?width=795&source=iframe&s=t&tm=1&sm=t' width=100%  height='1300' frameborder='0' style='overflow:auto'></iframe>
<h2 id="_2-分支结构" tabindex="-1"><a class="header-anchor" href="#_2-分支结构" aria-hidden="true">#</a> 2 分支结构</h2>
<p>分支结构旨在让程序拥有思考的能力</p>
<p>举个例子我看到可乐。我会先看我自己有多少钱，如果有 3 元我就买，没 3 元我就不买</p>
<p>在程序中，如果我买那么就是 <code v-pre>True</code>，不买就是 <code v-pre>False</code>。那么我们该如何得出我买还是不买的思考结果呢？答案就是分支语句</p>
<div class="custom-container info"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">提示</p><p>本章的代码在线运行网页在这，推荐配合文档使用</p>
<p><a href="https://shiyizhihanzhuzhuya.github.io/jupyterbook/lab?path=note%2F%E5%88%86%E6%94%AF%E7%BB%93%E6%9E%84.ipynb" target="_blank" rel="noopener noreferrer">分支结构<ExternalLinkIcon/></a></p>
</div><h3 id="_2-1-条件表达式" tabindex="-1"><a class="header-anchor" href="#_2-1-条件表达式" aria-hidden="true">#</a> 2.1 条件表达式</h3>
<p>我们首先要知道一些基础的判断逻辑</p>
<h4 id="_2-1-1-关系运算符" tabindex="-1"><a class="header-anchor" href="#_2-1-1-关系运算符" aria-hidden="true">#</a> 2.1.1 关系运算符</h4>
<p><strong>定义：</strong> 关系运算又称为比较运算，用于对两个类型相同的表达式的值大小进行比较，其结果只能为 <code v-pre>True</code> 或 <code v-pre>False</code></p>
<p><strong>用途：</strong> 判断两个数的数值大小，分支结构</p>
<p><strong>关系运算符：</strong></p>
<div class="center">
<table>
<thead>
<tr>
<th style="text-align:center">运算符</th>
<th style="text-align:center">含义</th>
<th style="text-align:center">示例</th>
<th style="text-align:center">结果</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">&lt;</td>
<td style="text-align:center">小于</td>
<td style="text-align:center"><code v-pre>1 &lt; 2</code></td>
<td style="text-align:center"><code v-pre>True</code></td>
</tr>
<tr>
<td style="text-align:center">&lt;=</td>
<td style="text-align:center">小于或等于</td>
<td style="text-align:center"><code v-pre>3 + 1 &lt;= 2 + 1</code></td>
<td style="text-align:center"><code v-pre>False</code></td>
</tr>
<tr>
<td style="text-align:center">&gt;=</td>
<td style="text-align:center">大于或等于</td>
<td style="text-align:center"><code v-pre>1 + 1 &gt;= 2</code></td>
<td style="text-align:center"><code v-pre>True</code></td>
</tr>
<tr>
<td style="text-align:center">&gt;</td>
<td style="text-align:center">大于</td>
<td style="text-align:center"><code v-pre>&quot;a&quot; &gt; &quot;b&quot;</code></td>
<td style="text-align:center"><code v-pre>False</code></td>
</tr>
<tr>
<td style="text-align:center">==</td>
<td style="text-align:center">等于</td>
<td style="text-align:center"><code v-pre>&quot;abc&quot; == &quot;ABC&quot;</code></td>
<td style="text-align:center"><code v-pre>False</code></td>
</tr>
<tr>
<td style="text-align:center">!=</td>
<td style="text-align:center">不等于</td>
<td style="text-align:center"><code v-pre>3 != 5</code></td>
<td style="text-align:center"><code v-pre>True</code></td>
</tr>
</tbody>
</table>
</div>
<div class="custom-container warning"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></g></svg><p class="custom-container-title">注意</p><p>算数运算符的运算优先级 <strong>高于</strong> 关系运算符</p>
</div><h4 id="_2-1-2-逻辑运算符" tabindex="-1"><a class="header-anchor" href="#_2-1-2-逻辑运算符" aria-hidden="true">#</a> 2.1.2 逻辑运算符</h4>
<p><strong>定义：</strong> 逻辑运算又称为布尔运算，用于逻辑值进行逻辑运算</p>
<p><strong>用途：</strong> 判断真伪，分支结构</p>
<p><strong>逻辑表达式：</strong></p>
<div class="center">
<table>
<thead>
<tr>
<th style="text-align:center">运算符</th>
<th style="text-align:center">中文</th>
<th style="text-align:center">含义</th>
<th style="text-align:center">示例</th>
<th style="text-align:center">结果</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">and</td>
<td style="text-align:center">与</td>
<td style="text-align:center">左右两边都为 <code v-pre>True</code>，其值为 <code v-pre>True</code>，否则为 <code v-pre>False</code></td>
<td style="text-align:center"><code v-pre>3 &lt; 2 and 1 &gt; 0</code></td>
<td style="text-align:center"><code v-pre>False</code></td>
</tr>
<tr>
<td style="text-align:center">or</td>
<td style="text-align:center">或</td>
<td style="text-align:center">左右两边都为 <code v-pre>False</code>， 其值为 <code v-pre>False</code>，否则为 <code v-pre>True</code></td>
<td style="text-align:center"><code v-pre>3 &lt; 2 or 1 &gt; 0</code></td>
<td style="text-align:center"><code v-pre>True</code></td>
</tr>
<tr>
<td style="text-align:center">not</td>
<td style="text-align:center">非</td>
<td style="text-align:center">反转布尔值结果，非 <code v-pre>False</code> 即为 <code v-pre>True</code>，非 <code v-pre>False</code> 即为 <code v-pre>True</code></td>
<td style="text-align:center"><code v-pre>not 1 &gt; 0</code></td>
<td style="text-align:center"><code v-pre>False</code></td>
</tr>
</tbody>
</table>
</div>
<h3 id="_2-2-分支语句" tabindex="-1"><a class="header-anchor" href="#_2-2-分支语句" aria-hidden="true">#</a> 2.2 分支语句</h3>
<p>前面的内容视为对本知识点的铺垫，因为没听前面的根本听不懂后边的内容</p>
<h4 id="_2-2-1-if-语句" tabindex="-1"><a class="header-anchor" href="#_2-2-1-if-语句" aria-hidden="true">#</a> 2.2.1 if 语句</h4>
<p><strong>定义：</strong> 单分支结构，如果成立就执行 <code v-pre>if</code> 后的语句，不成立则不输出</p>
<p><strong>用途：</strong> 基础逻辑处理</p>
<p><strong>语法：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">if</span> <span class="token operator">&lt;</span>条件<span class="token operator">></span><span class="token punctuation">:</span>
    条件为真执行语句
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 声明整数类型变量 a 并赋值 3</span>
a <span class="token operator">=</span> <span class="token number">3</span>
<span class="token comment"># 声明整数类型变量 b 并赋值 5</span>
b <span class="token operator">=</span> <span class="token number">5</span>
<span class="token comment"># 如果 a 大于 b</span>
<span class="token keyword">if</span> a <span class="token operator">></span> b<span class="token punctuation">:</span>
    <span class="token comment"># 不输出，因为 a 小于 b</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"a 比 b 大"</span><span class="token punctuation">)</span>
<span class="token comment"># 没有输出内容</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-2-if-else-语句" tabindex="-1"><a class="header-anchor" href="#_2-2-2-if-else-语句" aria-hidden="true">#</a> 2.2.2 if else 语句</h4>
<p><strong>定义：</strong> 二分支结构，如果 <code v-pre>if</code> 内条件不成立则执行 <code v-pre>else</code> 中的语句</p>
<p><strong>用途：</strong> 简单逻辑处理</p>
<p><strong>语法：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">if</span> <span class="token operator">&lt;</span>条件<span class="token operator">></span><span class="token punctuation">:</span>
    条件为真执行语句

<span class="token keyword">else</span><span class="token punctuation">:</span>
    条件为假执行语句
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 声明整数类型变量 a 并赋值 3</span>
a <span class="token operator">=</span> <span class="token number">3</span>
<span class="token comment"># 声明整数类型变量 b 并赋值 5</span>
b <span class="token operator">=</span> <span class="token number">5</span>
<span class="token comment"># 如果 a 大于 b</span>
<span class="token keyword">if</span> a <span class="token operator">></span> b<span class="token punctuation">:</span>
    <span class="token comment"># 不输出，因为 a 小于 b</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"a 比 b 大"</span><span class="token punctuation">)</span>
<span class="token comment"># 其它情况</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token comment"># 输出，因为不满足 a 大于 b 的条件，则 a 小于 b 的情况属于其它情况</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"a 比 b 小"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></g></svg><p class="custom-container-title">注意</p><p>条件表达式和 <code v-pre>else</code> 关键字后都要跟英文冒号，冒号下一条语句需要缩进，而且代码的缩进长度相等</p>
</div><h4 id="_2-2-3-if-elif-else-语句" tabindex="-1"><a class="header-anchor" href="#_2-2-3-if-elif-else-语句" aria-hidden="true">#</a> 2.2.3 if elif else 语句</h4>
<p><strong>定义：</strong> 多分支结构，如果 <code v-pre>if</code> 内条件不成立则判断 <code v-pre>elif</code> 语句是否成立，如果 <code v-pre>elif</code> 成立执行 <code v-pre>elif</code> 内的语句；如果 <code v-pre>if</code> 和 <code v-pre>elif</code> 都不成立执行 <code v-pre>else</code> 内的语句</p>
<p><strong>用途：</strong> 复杂逻辑处理</p>
<p><strong>语法：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">if</span> <span class="token operator">&lt;</span>条件<span class="token operator">></span><span class="token punctuation">:</span>
    条件为真执行语句
<span class="token keyword">elif</span> <span class="token operator">&lt;</span>条件<span class="token operator">></span><span class="token punctuation">:</span>
    条件为真执行语句
···
<span class="token keyword">else</span><span class="token punctuation">:</span>
    所有 <span class="token keyword">if</span> 和 <span class="token keyword">else</span> 判断都为假执行语句
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 声明整数类型变量 a 并赋值 3</span>
a <span class="token operator">=</span> <span class="token number">3</span>
<span class="token comment"># 声明整数类型变量 b 并赋值 5</span>
b <span class="token operator">=</span> <span class="token number">5</span>
<span class="token comment"># 如果 a 大于 b</span>
<span class="token keyword">if</span> a <span class="token operator">></span> b<span class="token punctuation">:</span>
    <span class="token comment"># 不输出，因为 a 小于 b</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"a 比 b 大"</span><span class="token punctuation">)</span>

<span class="token comment"># 如果 a 等于 b</span>
<span class="token keyword">if</span> a <span class="token operator">==</span> b<span class="token punctuation">:</span>
    <span class="token comment"># 不输出，因为 a 不等于 b</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"a 等于 b"</span><span class="token punctuation">)</span>

<span class="token comment"># 其它情况</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token comment"># 输出，因为不满足 a 大于 b 的条件，则 a 小于 b 的情况属于其它情况</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"a 比 b 小"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></g></svg><p class="custom-container-title">WARNING</p><p>如果 <code v-pre>if</code> 成立就不会执行 <code v-pre>elif</code>，如果 <code v-pre>elif</code> 成立就不会执行 <code v-pre>else</code>
<code v-pre>elif</code> 语句可以有多条，如果中间有一条成立则后边的所有语句都不执行</p>
</div><h3 id="_2-3-随堂练习" tabindex="-1"><a class="header-anchor" href="#_2-3-随堂练习" aria-hidden="true">#</a> 2.3 随堂练习</h3>
<iframe src='https://ks.wjx.top/vm/rrxZ2DY.aspx?width=795&source=iframe&s=t&tm=1&sm=t' width=100% height='1718' frameborder='0' style='overflow:auto'></iframe>
<h2 id="_3-循环结构" tabindex="-1"><a class="header-anchor" href="#_3-循环结构" aria-hidden="true">#</a> 3 循环结构</h2>
<p>循环结构对于我们学习算法来说相当重要，它是我们实现一些高级操作的基础</p>
<div class="custom-container info"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">提示</p><p>本章的代码在线运行网页在这，推荐配合文档使用</p>
<p><a href="https://shiyizhihanzhuzhuya.github.io/jupyterbook/lab?path=note%2F%E5%BE%AA%E7%8E%AF%E7%BB%93%E6%9E%84.ipynb" target="_blank" rel="noopener noreferrer">循环结构<ExternalLinkIcon/></a></p>
</div><h3 id="_3-1-for-循环" tabindex="-1"><a class="header-anchor" href="#_3-1-for-循环" aria-hidden="true">#</a> 3.1 for 循环</h3>
<p><strong>定义：</strong> 重复执行指定次数的循环</p>
<p><strong>语法：</strong> <code v-pre>for 变量 in range(循环次数)</code></p>
<p><strong>用途：</strong> 算法</p>
<p><strong>示例：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># a 为整数类型 3</span>
a <span class="token operator">=</span> <span class="token number">3</span>
<span class="token comment"># 重复执行 5 次</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># a 等于 a 乘 2</span>
    a <span class="token operator">*=</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>for</code> 循环像一个和自己说连续不吃 3 天饭的女性，如果没满 3 天就绝不吃饭。这是一个相当有趣也固执的循环</p>
<p>在示例中使用的方法比较少见，因为这个是相当基础的用法。我们一般会用到更高级的方法</p>
<p><strong>高级语法：</strong> <code v-pre>for 变量 in range(起始数, 结束数, 步长)</code></p>
<p><strong>语法解释：</strong></p>
<div class='center'>
<table>
<thead>
<tr>
<th>名称</th>
<th>意义</th>
<th>注意</th>
</tr>
</thead>
<tbody>
<tr>
<td>起始数</td>
<td>从什么数字开始</td>
<td>如果不填起始数，那么默认从 0 开始</td>
</tr>
<tr>
<td>结束数</td>
<td>到什么数字结束</td>
<td>必填项目</td>
</tr>
<tr>
<td>步长</td>
<td>间隔多少取值</td>
<td>如果不填步长，那么默认为 1</td>
</tr>
</tbody>
</table>
</div>
<div class="custom-container warning"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></g></svg><p class="custom-container-title">注意</p><p>步长有特殊用法。如果步长是正数（例如 1），那么就会正向输出（0, 1, 2, 3, 4）。但如果步长和结束数是负数（例如步长 -1，结束数 -1），那么就会逆向输出（4, 3, 2, 1, 0）</p>
<p>输出结果的范围不包括结束数本身（因为循环到结束数就终止了，不会输出）。所以 <code v-pre>range(1, 10)</code> 的结果会是 <code v-pre>1, 2, ..., 9</code></p>
</div><p><strong>示例2：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 开始值不输入的话默认从0开始，打印输出0到9</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>

<span class="token comment"># 步长值不输入的话默认为1</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token comment"># 1, 2, 3, 4, 5, 6, 7, 8, 9</span>
    
<span class="token comment"># 步长值输入为2</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
   	<span class="token comment"># 1, 3, 5, 7, 9</span>

<span class="token comment"># 打印输出10, 9, 8, 7, 6,5,4,3,2, 1, 0</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>各位可以发现，我们填入了一个 <code v-pre>i</code> 在 <code v-pre>for</code> 循环中，这意味着什么呢？事实上 <code v-pre>i</code> 是 <code v-pre>item</code>，代表着当前循环的值</p>
<p>比方说上面演示的第二种方法：<code v-pre>for i in range(1, 10)</code>。意味着 <code v-pre>i</code> 在第一次循环中代表 1,第二次循环中代表 2。以此类推</p>
<h3 id="_3-2-while-循环" tabindex="-1"><a class="header-anchor" href="#_3-2-while-循环" aria-hidden="true">#</a> 3.2 while 循环</h3>
<p><strong>定义：</strong> 按照特定条件执行的循环</p>
<p><strong>语法：</strong></p>
<p>::: code-tabs#while</p>
<p>@tab 条件循环</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">while</span> 条件<span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>@tab 死循环</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>:::</p>
<p><strong>用途：</strong> 需要重复执行的单线程语句</p>
<p><strong>示例：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># i 默认为整数类型 0</span>
i <span class="token operator">=</span> <span class="token number">0</span>
<span class="token comment"># 这是一个条件循环，只有 i 小于 10 的时候才会执行</span>
<span class="token keyword">while</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">:</span>
    <span class="token comment"># 每循环一次 i 加 1</span>
    i <span class="token operator">+=</span> <span class="token number">1</span>
<span class="token comment"># 输出 i，i 此时应该等于 9</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的示例是条件循环，只有当满足条件的时候才会结束。这部分的内容应该很好理解</p>
<p><code v-pre>while</code> 循环就像一个不到 60 斤不会停止减肥的女性哦~</p>
<p><strong>示例2：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 这是一个死循环，如果不干预永远不会停止</span>
<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    <span class="token comment"># 输出 1</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的示例是死循环，它会从代码结尾回到开头······如果没有特殊操作永远不会停止！那么我们有办法让死循环停止吗？当然，我们需要使用 <code v-pre>break</code> 跳出循环</p>
<p><strong>示例3：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 这是一个死循环</span>
<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    <span class="token comment"># 我们给了它一个 i 小于 10 输出 1 的条件</span>
    <span class="token keyword">if</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token comment"># 如果不小于 10</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token comment"># 跳出循环，这个死循环将会被终止</span>
        <span class="token keyword">break</span>

<span class="token comment"># 因此它与下面这条语句等价</span>
<span class="token keyword">while</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>没错，<code v-pre>break</code> 语句让我们成功的把死循环变成了条件循环，<code v-pre>break</code> 意为跳出，你可以在不希望程序继续执行的时候使用</p>
<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">总结</p><p><code v-pre>while</code> 除非条件为假否则永远不会终止</p>
</div><h3 id="_3-3-随堂练习" tabindex="-1"><a class="header-anchor" href="#_3-3-随堂练习" aria-hidden="true">#</a> 3.3 随堂练习</h3>
<iframe src='https://ks.wjx.top/vm/OLvcDcs.aspx?width=760&source=iframe&s=t' width=100% height='800' frameborder='0' style='overflow:auto'></iframe>
<h2 id="_4-强大的-python-库" tabindex="-1"><a class="header-anchor" href="#_4-强大的-python-库" aria-hidden="true">#</a> 4 强大的 Python 库</h2>
<p><strong>定义：</strong> 具有相关功能模块的集合</p>
<p><strong>库的种类：</strong> Python 中有上千种由开源社区开发的优秀的第三方库。每一个库都包含特定功能的相关函数，针对不同的应用发挥不同的作用</p>
<div class="custom-container info"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">提示</p><p>本章的代码在线运行网页在这，推荐配合文档使用</p>
<p><a href="https://shiyizhihanzhuzhuya.github.io/jupyterbook/lab?path=note%2F%E5%BC%BA%E5%A4%A7%E7%9A%84+Python+%E5%BA%93.ipynb" target="_blank" rel="noopener noreferrer">强大的 Python 库<ExternalLinkIcon/></a></p>
</div><h3 id="_4-1-库的使用" tabindex="-1"><a class="header-anchor" href="#_4-1-库的使用" aria-hidden="true">#</a> 4.1 库的使用</h3>
<p>初步了解库的一些基本操作</p>
<h4 id="_4-1-1-导入库" tabindex="-1"><a class="header-anchor" href="#_4-1-1-导入库" aria-hidden="true">#</a> 4.1.1 导入库</h4>
<p><strong>语法：</strong></p>
<p>::: code-tabs#import</p>
<p>@tab 导入库并赋予库别名</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> <span class="token operator">&lt;</span>库名<span class="token operator">></span> <span class="token keyword">as</span> <span class="token operator">&lt;</span>库别名<span class="token operator">></span>
<span class="token keyword">import</span> <span class="token operator">&lt;</span>库名<span class="token operator">></span><span class="token punctuation">.</span><span class="token operator">&lt;</span>函数名<span class="token operator">></span> <span class="token keyword">as</span> <span class="token operator">&lt;</span>库别名<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>@tab 直接导入库</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> <span class="token operator">&lt;</span>库名<span class="token operator">></span><span class="token punctuation">,</span> <span class="token operator">&lt;</span>库名<span class="token operator">></span><span class="token punctuation">.</span><span class="token operator">&lt;</span>函数名<span class="token operator">></span><span class="token punctuation">(</span><span class="token operator">&lt;</span>函数参数<span class="token operator">></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>@tab 导入库中全部函数</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">from</span> <span class="token operator">&lt;</span>库名<span class="token operator">></span> <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token keyword">from</span> <span class="token operator">&lt;</span>库名<span class="token operator">></span> <span class="token keyword">import</span> 函数名<span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span> 函数名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></g></svg><p class="custom-container-title">注意</p><p>如果使用第一种方法，因为使用了别的名称代替了原本库的名称，所以在调用库的函数时要加上 <code v-pre>&lt;库别名&gt;</code> 做前缀</p>
</div><h4 id="_4-1-2-安装第三方库" tabindex="-1"><a class="header-anchor" href="#_4-1-2-安装第三方库" aria-hidden="true">#</a> 4.1.2 安装第三方库</h4>
<p><strong>语法：</strong> <code v-pre>pip install &lt;库名&gt;</code></p>
<p><strong>示例：</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>pip <span class="token function">install</span> scikit-learn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>示例：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 导入 turtle 库命名为 t</span>
<span class="token keyword">import</span> turtle <span class="token keyword">as</span> t
<span class="token comment"># 导入 time 库中的时间模块命名为 s</span>
<span class="token keyword">import</span> time<span class="token punctuation">.</span>sleep <span class="token keyword">as</span> s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-random-库" tabindex="-1"><a class="header-anchor" href="#_4-2-random-库" aria-hidden="true">#</a> 4.2 random 库</h3>
<p><strong>定义：</strong> <code v-pre>random</code> 是 Python 的一种标准库，用来产生随机数</p>
<h4 id="_4-2-1-randint-函数的使用" tabindex="-1"><a class="header-anchor" href="#_4-2-1-randint-函数的使用" aria-hidden="true">#</a> 4.2.1 randint 函数的使用</h4>
<p><strong>定义：</strong> 生成随机整数的函数</p>
<p><strong>用途：</strong> 随机生成一个整数，整数 n 的范围是 <code v-pre>a &lt;= n &lt;= b</code></p>
<p><strong>语法：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">import</span> random
random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 导入随机库</span>
<span class="token keyword">import</span> random <span class="token keyword">as</span> r
<span class="token comment"># 使用随机库的生成随机整数的函数，范围是 1 ~ 100</span>
target <span class="token operator">=</span> r<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>

<span class="token comment"># 如果生成的数等于 50</span>
<span class="token keyword">if</span> target <span class="token operator">==</span> <span class="token number">50</span><span class="token punctuation">:</span>
    <span class="token comment"># 输出等于 50</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"等于 50"</span><span class="token punctuation">)</span>
<span class="token comment"># 如果不是 50</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token comment"># 输出不是 50</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"不是 50"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">总结</p><p><code v-pre>random</code> 库是专责生成随机数的库，而 <code v-pre>random.randint</code> 则是其中专责用来处理随机整数的库。<code v-pre>randint</code> 函数的语法是 <code v-pre>randint(a, b)</code></p>
</div><h3 id="_4-3-turtle-库" tabindex="-1"><a class="header-anchor" href="#_4-3-turtle-库" aria-hidden="true">#</a> 4.3 turtle 库</h3>
<p><strong>定义：</strong> <code v-pre>turtle</code> 库是 Python 中自带的画图库</p>
<p><strong>常见函数：</strong></p>
<div class="center">
<table>
<thead>
<tr>
<th style="text-align:center">函数</th>
<th style="text-align:center">语法</th>
<th style="text-align:center">作用</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><code v-pre>shape()</code></td>
<td style="text-align:center"><code v-pre>shape(形状关键字)</code></td>
<td style="text-align:center">改变画笔形状</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>width()</code></td>
<td style="text-align:center"><code v-pre>width(粗细)</code></td>
<td style="text-align:center">改变画笔粗细</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>pencolor()</code></td>
<td style="text-align:center"><code v-pre>pencolor(颜色)</code></td>
<td style="text-align:center">改变画笔颜色</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>circle()</code></td>
<td style="text-align:center"><code v-pre>circle(半径)</code></td>
<td style="text-align:center">绘制半径为 <code v-pre>半径</code> 的圆形</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>goto()</code></td>
<td style="text-align:center"><code v-pre>goto(x 坐标, y 坐标)</code></td>
<td style="text-align:center">将画笔移到 (<code v-pre>x 坐标</code>, <code v-pre>y 坐标</code>)</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>penup()</code></td>
<td style="text-align:center"><code v-pre>penup()</code></td>
<td style="text-align:center">抬起画笔（移动不会产生线条）</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>pendown()</code></td>
<td style="text-align:center"><code v-pre>pendown()</code></td>
<td style="text-align:center">放下画笔（移动会产生线条）</td>
</tr>
</tbody>
</table>
</div>
<p>我们只选最为常用的函数讲解</p>
<h4 id="_4-3-1-turtle-库的使用" tabindex="-1"><a class="header-anchor" href="#_4-3-1-turtle-库的使用" aria-hidden="true">#</a> 4.3.1 turtle 库的使用</h4>
<p><code v-pre>turtle</code> 库作为一个画图库，其底下有很多实用的函数。函数名为了方便理解，都采用了自然语言中的单词以确保简单易懂</p>
<h5 id="_4-3-1-1-circle-函数" tabindex="-1"><a class="header-anchor" href="#_4-3-1-1-circle-函数" aria-hidden="true">#</a> 4.3.1.1 circle 函数</h5>
<p><strong>定义：</strong> <code v-pre>turtle</code> 库中专门用来画圆的函数</p>
<p><strong>用途：</strong> 绘制图像中的圆形</p>
<p><strong>语法：</strong> <code v-pre>turtle.circle(半径)</code></p>
<p><strong>示例：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 导入 turtle</span>
<span class="token keyword">import</span> turtle <span class="token keyword">as</span> t
<span class="token comment"># 绘制一个半径为 50 像素的圆形</span>
t<span class="token punctuation">.</span>circle<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span>

<span class="token comment"># 绘制一个半径为 100 像素的圆形</span>
t<span class="token punctuation">.</span>circle<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></g></svg><p class="custom-container-title">注意</p><p>绘制半径的单位是像素，不是厘米</p>
</div><h5 id="_4-3-1-2-width-函数" tabindex="-1"><a class="header-anchor" href="#_4-3-1-2-width-函数" aria-hidden="true">#</a> 4.3.1.2 width 函数</h5>
<p><strong>定义：</strong> <code v-pre>turtle</code> 库中设置画笔大小的函数</p>
<p><strong>用途：</strong> 根据需要改变线条宽度</p>
<p><strong>语法：</strong> <code v-pre>turtle.width(线条粗细)</code></p>
<p><strong>示例：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 导入 turtle 库</span>
<span class="token keyword">import</span> turtle <span class="token keyword">as</span> t
<span class="token comment"># 改变画笔粗细为 10</span>
t<span class="token punctuation">.</span>width<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
<span class="token comment"># 绘制一个半径为 50 像素的圆形</span>
t<span class="token punctuation">.</span>circle<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span>

<span class="token comment"># 改变画笔粗细为 20</span>
t<span class="token punctuation">.</span>width<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>
<span class="token comment"># 绘制一个半径为 100 像素的圆形</span>
t<span class="token punctuation">.</span>circle<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></g></svg><p class="custom-container-title">WARNING</p><p>笔的粗细的单位也是像素，不是厘米</p>
</div><h4 id="_4-3-1-3-pencolor-函数" tabindex="-1"><a class="header-anchor" href="#_4-3-1-3-pencolor-函数" aria-hidden="true">#</a> 4.3.1.3 pencolor 函数</h4>
<p><strong>定义：</strong> <code v-pre>turtle</code> 中用于改变画笔颜色的库</p>
<p><strong>用途：</strong> 根据需要改变画笔颜色</p>
<p><strong>语法：</strong> <code v-pre>turtle.pencolor(&quot;颜色&quot;)</code></p>
<p><strong>示例：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 导入 turtle</span>
<span class="token keyword">import</span> turtle <span class="token keyword">as</span> t
<span class="token comment"># 改变画笔颜色为蓝色</span>
t<span class="token punctuation">.</span>pencolor<span class="token punctuation">(</span><span class="token string">"blue"</span><span class="token punctuation">)</span>
<span class="token comment"># 绘制一个半径为 50 像素的圆形</span>
t<span class="token punctuation">.</span>circle<span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span>

<span class="token comment"># 改变画笔颜色为粉色</span>
t<span class="token punctuation">.</span>pencolor<span class="token punctuation">(</span><span class="token string">"pink"</span><span class="token punctuation">)</span>
<span class="token comment"># 绘制一个半径为 100 像素的圆形</span>
t<span class="token punctuation">.</span>circle<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></g></svg><p class="custom-container-title">WARNING</p><p><code v-pre>pencolor()</code> 函数中需填入对应颜色的英文名，不能是中文</p>
</div><h3 id="_4-4-scikit-learn-库" tabindex="-1"><a class="header-anchor" href="#_4-4-scikit-learn-库" aria-hidden="true">#</a> 4.4 scikit-learn 库</h3>
<p>Python 的强项就在于自动化和分析，本章我们将走入 Python 高级使用方式的大门</p>
<h4 id="_4-4-1-大数据分析的一般过程" tabindex="-1"><a class="header-anchor" href="#_4-4-1-大数据分析的一般过程" aria-hidden="true">#</a> 4.4.1 大数据分析的一般过程</h4>
<div class="language-flow line-numbers-mode" data-ext="flow"><pre v-pre class="language-flow"><code>process<span class="token operator">=></span>operation<span class="token operator">:</span> 收集数据
process1<span class="token operator">=></span>operation<span class="token operator">:</span> 建立模型
process2<span class="token operator">=></span>operation<span class="token operator">:</span> 新数据

<span class="token function">process</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">process1</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">process2</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>收集数据，就是根据需求寻找可能有用的信息</p>
<p>建立模型，就是将收集到的内容转换为程序能理解的形式</p>
<p>新数据，就是输入模型后得到的新内容</p>
<h4 id="_4-4-2-收集数据和预处理" tabindex="-1"><a class="header-anchor" href="#_4-4-2-收集数据和预处理" aria-hidden="true">#</a> 4.4.2 收集数据和预处理</h4>
<p><img src="@source/docs/guide/八年级/assets/收集数据.png" alt="收集数据表格"></p>
<p>我们现在已经拿到了这些数据，下面我们要对他们进行一些基本的处理</p>
<p><strong>处理数据：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 记录水果特征列表</span>
features <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">140</span><span class="token punctuation">,</span> <span class="token string">"光滑"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">130</span><span class="token punctuation">,</span> <span class="token string">"光滑"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">150</span><span class="token punctuation">,</span> <span class="token string">"粗糙"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">170</span><span class="token punctuation">,</span> <span class="token string">"粗糙"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">180.</span> <span class="token string">"粗糙"</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token comment"># 记录水果类别</span>
labels <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"苹果"</span><span class="token punctuation">,</span> <span class="token string">"苹果"</span><span class="token punctuation">,</span> <span class="token string">"橙子"</span><span class="token punctuation">,</span> <span class="token string">"橙子"</span><span class="token punctuation">,</span> <span class="token string">"橙子"</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们将水果特征和水果类别分别转换为列表，这样能让程序理解。但是这样就够了吗？我们知道计算机都是 0 和 1 组成的，现在 <code v-pre>features</code> 的果皮材质一项只有 <code v-pre>光滑</code> 和 <code v-pre>粗糙</code> 两种情况，我们完全可以分别使用 1 和 0 代替他们。这样会更方便程序计算</p>
<p>同样的，水果种类也只有 <code v-pre>苹果</code> 和 <code v-pre>橙子</code>，我们也分别用 0 和 1 表示他们</p>
<p><strong>进一步处理：</strong></p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token comment"># 记录水果特征列表</span>
features <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">140</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">130</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">170</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">180</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token comment"># 记录水果类别</span>
labels <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-4-3-训练模型" tabindex="-1"><a class="header-anchor" href="#_4-4-3-训练模型" aria-hidden="true">#</a> 4.4.3 训练模型</h4>
<p>在训练之前，我们要先将 <code v-pre>scikit-learn</code> 库安装到 Python。命令是 <code v-pre>pip install scikit-learn</code></p>
<p>那么，如何训练呢？我们首先要知道什么是 KNN 算法。事实上，KNN 是一种基本的分类和回归算法，本质上是让输入与给定的数据集进行距离计算。而 <code v-pre>K</code> 就是输入距离最近点的数量</p>
<p>示例</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">from</span> sklearn <span class="token keyword">import</span> neighbors
<span class="token comment"># 记录水果特征列表</span>
features <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">140</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">130</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">170</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">180</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token comment"># 记录水果类别</span>
labels <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span>

<span class="token comment"># KNN 模型芬妮系数据，K 值为 3</span>
clf<span class="token operator">=</span>neighbors<span class="token punctuation">.</span>KNeighborsClassifier<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token comment"># 用我们之前收集到的数据分析训练模型</span>
clf<span class="token operator">=</span>clf<span class="token punctuation">.</span>fit<span class="token punctuation">(</span>features<span class="token punctuation">,</span> labels<span class="token punctuation">)</span>

<span class="token comment"># 判断 160 克重、粗糙的水果是苹果还是橙子</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>clf<span class="token punctuation">.</span>predict<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">160</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>K</code> 值为 3 意味着，模型只会检查前三个邻近的数据。即 <code v-pre>[150, 0], [170, 0], [168, 0]</code></p>
<div class="custom-container warning"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></g></svg><p class="custom-container-title">WARNING</p><p>数据越多判断越准确，如果输出的数据有误可能是因为样本数量过少
<code v-pre>K</code> 值要酌情考虑，结合实际情况填入。如果不填 <code v-pre>K</code> 值则默认使用所有数据</p>
</div></div></template>



<style>
.center 
{
  width: auto;
  display: table;
  margin-left: auto;
  margin-right: auto;
}
</style>
<style>
.center 
{
  width: auto;
  display: table;
  margin-left: auto;
  margin-right: auto;
}
</style>
<style>
.center 
{
  width: auto;
  display: table;
  margin-left: auto;
  margin-right: auto;
}
</style>
<style>
.center 
{
  width: auto;
  display: table;
  margin-left: auto;
  margin-right: auto;
}
</style>