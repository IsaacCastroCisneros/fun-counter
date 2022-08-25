import randomizer from "./randomizer";

export default function getLink()
{
  const artists=
  [
    {
      link:'https://safebooru.org/index.php?page=post&s=list&tags=crisalys+&pid=',
      pages:3
    },
    {
      link:'https://safebooru.org/index.php?page=post&s=list&tags=takato_kurosuke+-sakurai_momoka+-large_breasts+&pid=',
      pages:10
    },
    {
      link:'https://safebooru.org/index.php?page=post&s=list&tags=moyazou_%28kitaguni_moyashi_seizoujo%29+-monochrome+&pid=',
      pages:11
    },
    {
      link:'https://safebooru.org/index.php?page=post&s=list&tags=momae_makku+&pid=',
      pages:2
    },
    {
      link:'https://safebooru.org/index.php?page=post&s=list&tags=yaya_hiyayaka+-naruto+&pid=',
      pages:3
    },
    {
      link:'https://safebooru.org/index.php?page=post&s=list&tags=rbfnrbf_%28mandarin%29+&pid=',
      pages:3
    },
  ]

  const artist=randomizer(artists)[0];

  let pageArr=[]
  for(let i=1;i<=artist.pages;i++)
  {
     pageArr.push(i)
  }

  const numberShuffle = randomizer(pageArr)[0];
  const calcPage= (40*numberShuffle)-40;
  return `${artist.link}${calcPage}`
}