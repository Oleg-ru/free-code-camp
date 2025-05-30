const input = document.querySelector('#markdown-input');
const pattern = (patternReplacementArray = [
  {
    h6: [/^[ \t]*######[ \t](.+$)/gm, '<h6>$1</h6>'],
  },
  {
    h5: [/^[ \t]*#####[ \t](.+$)/gm, '<h5>$1</h5>'],
  },
  {
    h4: [/^[ \t]*####[ \t](.+$)/gm, '<h4>$1</h4>'],
  },
  {
    h3: [/^[ \t]*###[ \t](.+$)/gm, '<h3>$1</h3>'],
  },
  {
    h2: [/^[ \t]*##[ \t](.+$)/gm, '<h2>$1</h2>'],
  },
  {
    h1: [/^[ \t]*#[ \t](.+$)/gm, '<h1>$1</h1>'],
  },
  {
    hr: [/(?<=\n|^)---(?=\n|$)/, '<hr>'],
  },
  {
    strong: [/((?:\*|_){2})(.*?)\1/g, '<strong>$2</strong>'],
  },
  {
    em: [/(\*|_)(.*?)\1/g, '<em>$2</em>'],
  },
  {
    img: [/!\[\s*(.*?)\s*\]\(\s*(.*?)\s*\)/g, '<img alt="$1" src="$2">'],
  },
  {
    a: [/\[(.*?)\]\(\s*(.*?)\s*\)/g, '<a href="$2">$1</a>'],
  },
  {
    blockquote1: [/^[ \t]*> ([^\n]+?)$/gm, '<blockquote>$1</blockquote>\n'],
  },
  {
    blockquote2: [
      /(?<=<blockquote>)(.+?)<\/blockquote>\n\n^([^<\n]+?)$/gm,
      '$1 $2</blockquote>\n',
    ],
  },
  {
    ul: [/(?:^[-*+]\s+.*?$\n)+\s*?/gm, '<ul>\n$&</ul>'],
  },
  {
    ol: [/(?:^\d*\.\s+?\w.*?$\n)+\s*?/gm, '<ol>\n$&</ol>'],
  },
  {
    uli: [/^[-*+]\s+(.*?$)\n/gm, '<li>$1</li>\n'],
  },
  {
    oli: [/^\d*\.\s+?(.*?$)\n/gm, '<li>$1</li>\n'],
  },
  {
    p1: [/^([^<>\s][\s\S]*?)(?=\n\s*$)/gm, '<p>$1</p>'],
  },
  {
    p2: [
      /^\w*?(?:<strong>|<em>).+(?:<\/strong>|<\/em>)\s*\w*?[ \t]*$/gm,
      '<p>$&</p>',
    ],
  },
]);

function init() {
  input.addEventListener('input', () => {});
}

function convertMarkdown() {}
