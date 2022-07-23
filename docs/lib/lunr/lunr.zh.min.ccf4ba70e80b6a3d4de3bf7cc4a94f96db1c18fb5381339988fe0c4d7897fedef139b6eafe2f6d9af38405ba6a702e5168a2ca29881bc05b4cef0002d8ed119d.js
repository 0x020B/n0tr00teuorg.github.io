/*!
 * Lunr languages, `Chinese` language
 * https://github.com/MihaiValentin/lunr-languages
 *
 * Copyright 2019, Felix Lian (repairearth)
 * http://www.mozilla.org/MPL/
 *//*!
 * based on
 * Snowball zhvaScript Library v0.3
 * http://code.google.com/p/urim/
 * http://snowball.tartarus.org/
 *
 * Copyright 2010, Oleg Mazko
 * http://www.mozilla.org/MPL/
 */(function(b,a){typeof define=='function'&&define.amd?define(a):typeof exports=='object'?module.exports=a():a()(b.lunr)})(this,function(){return function(a){if('undefined'==typeof a)throw new Error('Lunr is not present. Please include / require Lunr before this script.');if('undefined'==typeof a.stemmerSupport)throw new Error('Lunr stemmer support is not present. Please include / require Lunr stemmer support before this script.');var b=a.version[0]=="2";a.zh=function(){this.pipeline.reset(),this.pipeline.add(a.zh.trimmer,a.zh.stopWordFilter,a.zh.stemmer),b?this.tokenizer=a.zh.tokenizer:(a.tokenizer&&(a.tokenizer=a.zh.tokenizer),this.tokenizerFn&&(this.tokenizerFn=a.zh.tokenizer))},a.zh.tokenizer=function(d){var e,c,f;return!arguments.length||d==null||d==void 0?[]:Array.isArray(d)?d.map(function(c){return b?new a.Token(c.toLowerCase()):c.toLowerCase()}):(e=d.toString().trim().toLowerCase(),c=[],a.segmentit&&a.segmentit.doSegment(e).forEach(function(a){c=c.concat(a.w.split(' '))}),c=c.filter(function(a){return!!a}),f=0,c.map(function(c,h){var g,d;return b?(g=e.indexOf(c,f),d={},d.position=[g,c.length],d.index=h,f=g,new a.Token(c,d)):c}))},a.zh.wordCharacters="\\w\u4e00-\u9fa5",a.zh.trimmer=a.trimmerSupport.generateTrimmer(a.zh.wordCharacters),a.Pipeline.registerFunction(a.zh.trimmer,'trimmer-zh'),a.zh.stemmer=function(){return function(a){return a}}(),a.Pipeline.registerFunction(a.zh.stemmer,'stemmer-zh'),a.zh.stopWordFilter=a.generateStopWordFilter('的 一 不 在 人 有 是 为 以 于 上 他 而 后 之 来 及 了 因 下 可 到 由 这 与 也 此 但 并 个 其 已 无 小 我 们 起 最 再 今 去 好 只 又 或 很 亦 某 把 那 你 乃 它 吧 被 比 别 趁 当 从 到 得 打 凡 儿 尔 该 各 给 跟 和 何 还 即 几 既 看 据 距 靠 啦 了 另 么 每 们 嘛 拿 哪 那 您 凭 且 却 让 仍 啥 如 若 使 谁 虽 随 同 所 她 哇 嗡 往 哪 些 向 沿 哟 用 于 咱 则 怎 曾 至 致 着 诸 自'.split(' ')),a.Pipeline.registerFunction(a.zh.stopWordFilter,'stopWordFilter-zh')}})