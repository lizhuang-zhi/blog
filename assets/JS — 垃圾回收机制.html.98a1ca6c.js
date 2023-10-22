import{_ as n,e as a}from"./app.fc2879aa.js";const s={},e=a(`<h1 id="js-\u2014-\u5783\u573E\u56DE\u6536\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#js-\u2014-\u5783\u573E\u56DE\u6536\u673A\u5236" aria-hidden="true">#</a> JS \u2014 \u5783\u573E\u56DE\u6536\u673A\u5236</h1><h2 id="\u53EF\u8FBE\u6027" tabindex="-1"><a class="header-anchor" href="#\u53EF\u8FBE\u6027" aria-hidden="true">#</a> \u53EF\u8FBE\u6027</h2><blockquote><p>\u503C\u901A\u8FC7\u67D0\u79CD\u65B9\u5F0F\u53EF\u8BBF\u95EE\uFF0C\u5219\u8FD9\u4E2A\u503C\u5177\u6709\u53EF\u8FBE\u6027\uFF0C\u5B83\u4EEC\u88AB\u4FDD\u8BC1\u5B58\u5728\u4E8E\u5185\u5B58\u4E2D</p></blockquote><h2 id="\u4E00\u4E2A\u5F15\u7528" tabindex="-1"><a class="header-anchor" href="#\u4E00\u4E2A\u5F15\u7528" aria-hidden="true">#</a> \u4E00\u4E2A\u5F15\u7528</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5C06\u4E00\u4E2Aname\u4E3Ajohn\u7684\u5BF9\u8C61\u8D4B\u503C\u7ED9user\u5168\u5C40\u53D8\u91CF</span>
<span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;John&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><img src="https://pic4.zhimg.com/80/v2-8a889a407cb7f9a16f6291d9170b431f_1440w.png" alt=""></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5C06user\u7F6E\u4E3Anull</span>
user <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="https://pic2.zhimg.com/80/v2-aa0c39493b1b221951cfbac208c5cc65_1440w.png" alt=""></p><p>\u73B0\u5728\u6CA1\u6709\u529E\u6CD5\u8BBF\u95EE\u5230Object\u5BF9\u8C61\uFF0C\u5373\u4E0D\u53EF\u8FBE\u72B6\u6001\uFF1B\u6B64\u65F6\u5783\u573E\u56DE\u6536\u5668\u4F1A\u4E22\u5F03Object\u7684\u6570\u636E\u5E76\u56DE\u6536\u5185\u5B58</p><h2 id="\u4E24\u4E2A\u5F15\u7528" tabindex="-1"><a class="header-anchor" href="#\u4E24\u4E2A\u5F15\u7528" aria-hidden="true">#</a> \u4E24\u4E2A\u5F15\u7528</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5C06\u4E00\u4E2Aname\u4E3Ajohn\u7684\u5BF9\u8C61\u8D4B\u503C\u7ED9user\u53D8\u91CF</span>
<span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;John&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u5C06user\u7684\u5F15\u7528\u5730\u5740\u503C\u8D4B\u503C\u7ED9admin</span>
<span class="token keyword">let</span> admin <span class="token operator">=</span> user<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><img src="https://pic1.zhimg.com/80/v2-0b127e8065aed661ef949b831ccda7c4_1440w.png" alt=""></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5C06user\u7F6E\u4E3Anull</span>
user <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u6B64\u65F6\u53EA\u662F\u5C06user\u7684\u5F15\u7528\u65AD\u5F00\u4E86\uFF0C\u4F46\u662F\u6211\u4EEC<strong>\u4EFB\u53EF\u4EE5\u901A\u8FC7admin\u8BBF\u95EE\u5230Object\uFF0C\u6545\u6B64\u65F6\u4E0D\u4F1A\u5BF9Object\u8FDB\u884C\u5783\u573E\u56DE\u6536</strong></p><h2 id="\u590D\u6742\u5F15\u7528" tabindex="-1"><a class="header-anchor" href="#\u590D\u6742\u5F15\u7528" aria-hidden="true">#</a> \u590D\u6742\u5F15\u7528</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">marry</span><span class="token punctuation">(</span><span class="token parameter">man<span class="token punctuation">,</span> woman</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  man<span class="token punctuation">.</span>wife <span class="token operator">=</span> woman<span class="token punctuation">;</span>
  woman<span class="token punctuation">.</span>husband <span class="token operator">=</span> man<span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">father</span><span class="token operator">:</span> man<span class="token punctuation">,</span>
    <span class="token literal-property property">mother</span><span class="token operator">:</span> woman
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> family <span class="token operator">=</span> <span class="token function">marry</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;John&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Ann&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p><img src="https://pic4.zhimg.com/80/v2-fafe60bfce1afa7b4a912f2bcdc82883_1440w.jpg" alt=""></p><p>\u6B64\u65F6\u56FE\u4E2D\u7684\u5BF9\u8C61\u90FD\u662F\u53EF\u8FBE\u7684</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">delete</span> family<span class="token punctuation">.</span>father<span class="token punctuation">;</span>
<span class="token keyword">delete</span> family<span class="token punctuation">.</span>mother<span class="token punctuation">.</span>husband<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="https://pic4.zhimg.com/80/v2-9f5399297ff39ac5e939e44022f1f7ab_1440w.jpg" alt=""></p><p>\u6B64\u65F6\u6211\u4EEC\u770B\u5230==\u6CA1\u6709\u4EFB\u4F55\u65B9\u5F0F\u53EF\u8FBE\u5230 {name: &quot;John&quot;} \u5BF9\u8C61\uFF0C\u6545\u6B64\u5BF9\u8C61\u4F1A\u88AB\u56DE\u6536==</p><p><img src="https://pic4.zhimg.com/80/v2-31e54b330a7d1c92607d565f68ef93eb_1440w.jpg" alt=""></p><p>\u56DE\u6536\u540E</p><p><img src="https://pic2.zhimg.com/80/v2-51a301acb7c1823551ae0068a619b7a5_1440w.png" alt=""></p><h2 id="\u6CE8\u610F" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F" aria-hidden="true">#</a> ==\u6CE8\u610F==</h2><p>\u662F\u5426\u5177\u6709\u53EF\u8FBE\u6027\uFF0C\u90FD\u9700\u8981\u4ECE==\u6839\u90E8==\u5F00\u59CB\u8FDB\u884C\u5224\u65AD\u7684\uFF01</p><p>\u6BD4\u5982\u4E0B\u56FE</p><p><img src="https://pic1.zhimg.com/80/v2-b484712016eead67e42e0a2f6c671260_1440w.jpg" alt=""></p><p>\u56FE\u4E2D\u7684\u4E0B\u90E8\u5206\u867D\u7136\u90FD\u662F\u76F8\u4E92\u53EF\u8FBE\u7684\uFF0C\u4F46\u662F\u4ECE\u5168\u5C40\u53D8\u91CFfamily\u5F00\u59CB\uFF0C\u5C31\u5DF2\u7ECF\u6CA1\u6709\u5F15\u7528\u4E0B\u9762\u7684\u90E8\u5206\u4E86\uFF0C\u6545\u4E0B\u90E8\u5206\u90FD\u662F\u4E0D\u53EF\u8FBE\u7684\uFF0C\u4F1A\u88AB\u56DE\u6536</p><h2 id="\u66F4\u591A" tabindex="-1"><a class="header-anchor" href="#\u66F4\u591A" aria-hidden="true">#</a> \u66F4\u591A</h2>`,30);function p(t,c){return e}var o=n(s,[["render",p],["__file","JS \u2014 \u5783\u573E\u56DE\u6536\u673A\u5236.html.vue"]]);export{o as default};
