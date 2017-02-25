biblioteca = {
  "Assassins Creed" : {
    titulo: "Assassin's Creed",
    criador: "Patrice Désilets, Jade Raymond, Corey May",
    desenvolvedores: "	Ubisoft Montreal, Ubisoft Annecy, Ubisoft Sofia, Ubisoft Milan, Ubisoft Toronto, Ubisoft Quebec, Gameloft, Griptonite Games, Ubsoft Blue Byte, Climax Studios",
    ano: "2007",
    resumo: "Assassin's Creed é uma série de jogos eletrônicos de ação-aventura criada pela Ubisoft. A série consiste atualmente em nove jogos principais, além de outros jogos secundários. Os jogos já foram lançados para várias plataformas incluindo PlayStation 3, PlayStation 4, Xbox 360, Xbox One, Microsoft Windows, Mac OS X, Nintendo DS, PlayStation Portable, PlayStation Vita, iOS, HP webOS,[1] Android, Nokia, Symbian, Windows Phone e Wii U. Os jogos principais foram na sua maior parte produzidos pelo estúdio Ubisoft Montreal com a colaboração do Ubisoft Annecy para o multijogador. Os portáteis já foram produzidos pela Gameloft e Gryptonite Studios com trabalho adicional do Ubisoft Montreal. Para além dos jogos Assassin's Creed já foi adaptada para os mais variados média como livros, banda desenhada, e filmes.",
    imagem: "AC1.jpg"
  },
  "Assassins Creed Brotherhood" : {
    titulo: "Assassin's Creed Brotherhood",
    criador: "Jeffrey Yohalem",
    desenvolvedores: "Ubisoft Montreal",
    ano: "2010",
    resumo: "Assassin's Creed: Brotherhood é um jogo de ação-aventura em terceira pessoa, sendo o terceiro da franquia e spin off de Assassin's Creed, desenvolvido pela Ubisoft e lançado em Novembro e Dezembro de 2010 para PlayStation 3 e Xbox 360, e em Março e Junho de 2011 para Microsoft Windows. É o primeiro jogo da série a apresentar o modo multiplayer",
    imagem: "ACB.JPG"
},
"Call of Duty Advanced Warfare" : {
  titulo: "Call of Duty Advanced Warfare",
  criador: "Sledgehammer Games",
  desenvolvedores: "John MacInnes, Eric Hirshberg, Mark Boa",
  ano: "2014",
  resumo: "Call of Duty: Advanced Warfare é um jogo do género tiro em primeira pessoa (first-person shooter) produzido pela Sledgehammer Games e publicado pela Activision (Square Enix no Japão). É o décimo primeiro jogo principal da série Call of Duty e o primeiro a ser produzido principalmente pela Sledgehammer Games.",
  imagem: "COD1.png"
},
"Call of Duty Black Ops III" : {
  titulo: "Call of Duty Black Ops III",
  criador: "Craig Houston",
  desenvolvedores: "Treyarch[a], Beenox, Mercenary Technology",
  ano: "2015",
  resumo: "Call of Duty: Black Ops III é um jogo eletrônico de tiro produzido pela empresa Treyarch e lançado no dia 6 de novembro de 2015 pela Activision para Microsoft Windows, PlayStation 4 e Xbox One. É o décimo terceiro título Call of Duty, contudo, a campanha desse jogo não é uma continuação do arco Black Ops, que se iniciou em Call of Duty: World at War (2008) e foi até Black Ops II.",
  imagem: "COD3.jpg" },

  "Halo Combat Evolved" : {
    titulo: "Halo Combat Evolved",
    criador: "	Martin O'Donnell, Michael Salvatori",
    desenvolvedores: "Bungie, Gearbox Software, Westlake Interactive",
    ano: "2001",
    resumo: "Halo: Combat Evolved (também conhecido como Halo: CE, Halo 1, ou simplesmente de Halo) é um jogo eletrônico de 2001 de ficção científica militar de tiro em primeira pessoa desenvolvido pela Bungie e publicado pela Microsoft Game Studios. O primeiro jogo da franquia Halo, foi lançado em 15 de novembro de 2001 como um título de lançamento exclusivo para o console Xbox,[1] e é considerada a plataforma killer app.[7] Mais de cinco milhões de cópias foram vendidas em todo o mundo até novembro de 2005",
    imagem: "H1.jpg" },

    "Halo 2" : {
      titulo: "Halo 2",
      criador: "	Martin O'Donnell, Michael Salvatori",
      desenvolvedores: "Bungie Studios",
      ano: "2004",
      resumo: "Halo 2 é a sequência do jogo de tiro em primeira pessoa Halo: Combat Evolved, lançada para o Xbox em 2004. No primeiro dia de lançamento, rendeu US$125 milhões, um recorde de entretenimento.",
      imagem: "H2.jpg" },
    }

    function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function exibeDetalhes(item) {
  document.getElementById("imagem_detalhes").src = item.imagem;
  document.getElementById("titulo_detalhes").innerHTML = item.titulo;
  document.getElementById("resumo_detalhes").innerHTML = item.resumo;
  document.getElementById("autores_detalhes").innerHTML = item.criador;
  document.getElementById("editora_detalhes").innerHTML = item.desenvolvedores;
  document.getElementById("ano_detalhes").innerHTML = item.ano;
}

var codigo = getParameterByName('codigo');
exibeDetalhes(biblioteca[codigo]);
