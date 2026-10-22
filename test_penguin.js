const fs=require('fs');
const html=fs.readFileSync('index.html','utf8');
const m=html.match(/function penguin[\s\S]*?<\/svg>`;/);
if(m){
  const tpl=m[0];
  console.log('Found penguin function:', tpl.length, 'chars');
  const svgMatch=tpl.match(/<svg[\s\S]*?<\/svg>/);
  if(svgMatch){
    fs.writeFileSync('penguin_test.svg', svgMatch[0]);
    console.log('Wrote penguin_test.svg, size:', svgMatch[0].length);
    const svg=svgMatch[0];
    const open=svg.split('<').length-1;
    const close=svg.split('</').length-1;
    console.log('SVG tags  open='+open+' close='+close+' diff='+(open-close));
  }
}
