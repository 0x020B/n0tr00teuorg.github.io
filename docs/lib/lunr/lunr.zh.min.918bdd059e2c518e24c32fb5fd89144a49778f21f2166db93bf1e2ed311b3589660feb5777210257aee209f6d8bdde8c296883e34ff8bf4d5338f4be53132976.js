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
 */(function(e,t){typeof define=="function"&&define.amd?define(t):typeof exports=="object"?module.exports=t():t()(e.lunr)})(this,function(){return function(e){if("undefined"==typeof e)throw new Error("Lunr is not present. Please include / require Lunr before this script.");if("undefined"==typeof e.stemmerSupport)throw new Error("Lunr stemmer support is not present. Please include / require Lunr stemmer support before this script.");var t=e.version[0]=="2";e.zh=function(){this.pipeline.reset(),this.pipeline.add(e.zh.trimmer,e.zh.stopWordFilter,e.zh.stemmer),t?this.tokenizer=e.zh.tokenizer:(e.tokenizer&&(e.tokenizer=e.zh.tokenizer),this.tokenizerFn&&(this.tokenizerFn=e.zh.tokenizer))},e.zh.tokenizer=function(n){if(!arguments.length||n==null||n==null)return[];if(Array.isArray(n))return n.map(function(n){return t?new e.Token(n.toLowerCase()):n.toLowerCase()});var o,i=n.toString().trim().toLowerCase(),s=[];return e.segmentit&&e.segmentit.doSegment(i).forEach(function(e){s=s.concat(e.w.split(" "))}),s=s.filter(function(e){return!!e}),o=0,s.map(function(n,s){if(t){var r=i.indexOf(n,o),a={};return a.position=[r,n.length],a.index=s,o=r,new e.Token(n,a)}return n})},e.zh.wordCharacters="\\w\u4e00-\u9fa5",e.zh.trimmer=e.trimmerSupport.generateTrimmer(e.zh.wordCharacters),e.Pipeline.registerFunction(e.zh.trimmer,"trimmer-zh"),e.zh.stemmer=function(){return function(e){return e}}(),e.Pipeline.registerFunction(e.zh.stemmer,"stemmer-zh"),e.zh.stopWordFilter=e.generateStopWordFilter("的 一 不 在 人 有 是 为 以 于 上 他 而 后 之 来 及 了 因 下 可 到 由 这 与 也 此 但 并 个 其 已 无 小 我 们 起 最 再 今 去 好 只 又 或 很 亦 某 把 那 你 乃 它 吧 被 比 别 趁 当 从 到 得 打 凡 儿 尔 该 各 给 跟 和 何 还 即 几 既 看 据 距 靠 啦 了 另 么 每 们 嘛 拿 哪 那 您 凭 且 却 让 仍 啥 如 若 使 谁 虽 随 同 所 她 哇 嗡 往 哪 些 向 沿 哟 用 于 咱 则 怎 曾 至 致 着 诸 自".split(" ")),e.Pipeline.registerFunction(e.zh.stopWordFilter,"stopWordFilter-zh")}})