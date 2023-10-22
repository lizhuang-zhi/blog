import{_ as n,e as s}from"./app.fc2879aa.js";const a={},e=s(`<h1 id="js-\u2014-eval" tabindex="-1"><a class="header-anchor" href="#js-\u2014-eval" aria-hidden="true">#</a> JS \u2014 eval()</h1><h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><blockquote><p>eval(string)</p></blockquote><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&#39;2 + 2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// expected output: 4</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">eval</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&#39;2 + 2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// expected output: 2 + 2</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&#39;2 + 2&#39;</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&#39;4&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// expected output: true</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&#39;2 + 2&#39;</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token function">eval</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&#39;2 + 2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// expected output: false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u8FD4\u56DE\u503C" tabindex="-1"><a class="header-anchor" href="#\u8FD4\u56DE\u503C" aria-hidden="true">#</a> \u8FD4\u56DE\u503C</h2><p>\u8FD4\u56DE\u5B57\u7B26\u4E32\u4E2D\u4EE3\u7801\u7684\u8FD4\u56DE\u503C\u3002\u5982\u679C\u8FD4\u56DE\u503C\u4E3A\u7A7A\uFF0C\u5219\u8FD4\u56DE undefined</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u5B83\u7684\u529F\u80FD\u662F\u628A\u5BF9\u5E94\u7684\u5B57\u7B26\u4E32\u89E3\u6790\u6210 JS \u4EE3\u7801\u5E76\u8FD0\u884C\u3002

\u5E94\u8BE5\u907F\u514D\u4F7F\u7528 eval\uFF0C\u4E0D\u5B89\u5168\uFF0C\u975E\u5E38\u8017\u6027\u80FD\uFF082\u6B21\uFF0C\u4E00\u6B21\u89E3\u6790\u6210 js \u8BED\u53E5\uFF0C\u4E00\u6B21\u6267\u884C\uFF09\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,9);function p(t,c){return e}var l=n(a,[["render",p],["__file","JS \u2014 eval().html.vue"]]);export{l as default};
